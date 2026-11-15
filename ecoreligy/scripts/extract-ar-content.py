"""Extract the nine structured AR profiles from the supplied DOCX using Python stdlib only."""

import json
import re
import zipfile
from pathlib import Path
from xml.etree import ElementTree

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "docs" / "ar" / "Basis_Konten_AR_EcoReligi_Wali_Songo.docx"
OUTPUT = ROOT / "src" / "data" / "walisongo-ar-content.json"
NS = {"w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main"}
PROFILE_IDS = {
    "Maulana Malik Ibrahim": "malik-ibrahim",
    "Sunan Ampel": "sunan-ampel",
    "Sunan Bonang": "sunan-bonang",
    "Sunan Drajat": "sunan-drajat",
    "Sunan Giri": "sunan-giri",
    "Sunan Gunung Jati": "sunan-gunung-jati",
    "Sunan Kalijaga": "sunan-kalijaga",
    "Sunan Kudus": "sunan-kudus",
    "Sunan Muria": "sunan-muria",
}
FIELDS = (
    ("Nama lain", "aliases"),
    ("Biodata", "biography"),
    ("Sejarah dan perjalanan dakwah", "history"),
    ("Lokasi makam", "tombLocation"),
)


def parse_source(line):
    if line.startswith("Dokumen pengguna:"):
        return {"title": line.split(":", 1)[1].strip(), "publisher": "Dokumen pengguna", "url": None}
    parts = re.split(r"\s+[–—]\s+", line, maxsplit=2)
    url_match = re.search(r"https?://\S+", line)
    url = url_match.group(0).rstrip(".,)") if url_match else None
    if len(parts) >= 3:
        publisher, title = parts[0].strip(), parts[1].strip()
    elif len(parts) == 2:
        publisher, title = parts[0].strip(), parts[1].strip()
    else:
        publisher, title = "Rujukan dalam dokumen", line
    if url:
        title = title.replace(url_match.group(0), "").strip(" –—")
    return {"title": title, "publisher": publisher, "url": url}


with zipfile.ZipFile(SOURCE) as archive:
    document = ElementTree.fromstring(archive.read("word/document.xml"))

paragraphs = [
    "".join(node.text or "" for node in paragraph.findall(".//w:t", NS)).strip()
    for paragraph in document.findall(".//w:p", NS)
]
profiles = []
current = None
section = None

for line in paragraphs:
    heading = re.match(r"^\d{2}\.\s+(.+?)(?:\s*\([^)]*\))?$", line)
    if heading and heading.group(1) in PROFILE_IDS:
        current = {
            "id": PROFILE_IDS[heading.group(1)],
            "name": heading.group(1),
            "aliases": "",
            "biography": "",
            "history": "",
            "tombLocation": "",
            "heritageItems": [],
            "historicalNotes": [],
            "sources": [],
        }
        profiles.append(current)
        section = None
        continue
    if current is None:
        continue

    if line == "Peninggalan dan warisan budaya":
        section = "heritageItems"
        continue
    if line == "Catatan kehati-hatian sejarah":
        section = "historicalNotes"
        continue
    if line == "Sumber rujukan":
        section = "sources"
        continue

    handled = False
    for label, field in FIELDS:
        if line.startswith(label):
            value = line[len(label):].strip(" :\t")
            current[field] = value
            section = field
            handled = True
            break
    if handled or not line:
        continue

    if section == "heritageItems":
        name, separator, description = line.partition(":")
        current["heritageItems"].append({
            "name": name.strip() if separator else line,
            "description": description.strip() if separator else line,
        })
    elif section == "historicalNotes":
        current["historicalNotes"].append(line)
    elif section == "sources":
        current["sources"].append(parse_source(line))

if len(profiles) != 9:
    raise SystemExit(f"Expected 9 profiles in {SOURCE}, extracted {len(profiles)}.")
for profile in profiles:
    for field in ("aliases", "biography", "history", "tombLocation"):
        if not profile[field]:
            raise SystemExit(f"{profile['name']} is missing {field} in the source DOCX.")
    if not profile["heritageItems"] or not profile["historicalNotes"] or not profile["sources"]:
        raise SystemExit(f"{profile['name']} is missing heritage, historical notes, or sources in the source DOCX.")

OUTPUT.write_text(json.dumps({"sourceDocument": "docs/ar/Basis_Konten_AR_EcoReligi_Wali_Songo.docx", "profiles": profiles}, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print(f"Extracted {len(profiles)} complete profiles to {OUTPUT.relative_to(ROOT)}.")
