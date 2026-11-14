# EcoReligi destination content checklist

This checklist separates details found in the supplied report or Google Maps redirects from items still needing confirmation. Existing destination and journey IDs remain unchanged.

## Coordinates and addresses

The nine supplied Maps links redirect to place names and address text, but the final URLs and returned page did not expose numeric latitude/longitude. All nine therefore remain `coords: null`, `coordsStatus: "unverified"`; the existing map pins are approximate area markers only. The original short links are saved as `mapsUrl`. Directions open a Google Maps address search and are not coordinate-verified.

| Destination ID | Map link resolved to | Coordinates | Address follow-up |
|---|---|---|---|
| `sunan-ampel` | Makam Sunan Ampel, Jl. Ampel Blumbang No. 2A, Semampir, Surabaya | Needs verification | Report says Jl. Masjid Ampel No. 53. Resolve this address discrepancy locally. |
| `malik-ibrahim` | Makam Sunan Gresik, Jl. Malik Ibrahim No. 52–62, Gapuro Sukolilo, Gresik | Needs verification | Street and number align with report. |
| `sunan-bonang` | Wisata Religi Sunan Bonang, Gang IV, Kutorejo, Tuban | Needs verification | Report identifies Kauman, Kutorejo; confirm exact street. |
| `sunan-drajat` | Makam Sunan Drajat, Drajat, Paciran, Lamongan | Needs verification | Village and district align with report. |
| `sunan-giri` | Makam Sunan Giri, Jl. Sunan Giri, Pedukuhan, Kebomas, Gresik | Needs verification | Report says Dusun Giri Gajah, Desa Giri; confirm exact approach/address. |
| `sunan-kudus` | Komplek Makam Sunan Kudus, Jl. Menara, Langgardalem, Kudus | Needs verification | The supplied report has no profile for this site. |
| `sunan-kalijaga` | Makam Sunan Kalijaga, Jl. Raden Sahid, Kadilangu, Demak | Needs verification | The supplied report has no profile for this site. |
| `sunan-muria` | Makam Sunan Muria, Colo, Dawe, Kudus | Needs verification | The supplied report has no profile for this site. |
| `sunan-gunung-jati` | Makam Sunan Gunung Jati, Jl. Makam / Jl. Sunan Gn. Jati, Astana, Cirebon | Needs verification | Confirm the street wording and exact coordinates. |

Please provide a coordinate pair for each destination as `latitude, longitude` if exact pins and coordinate-based direction URLs are required. The map intentionally continues to label the current markers approximate.

## Content to provide or confirm

- Sunan Kudus, Sunan Kalijaga, Sunan Muria, and Sunan Gunung Jati: aliases, biography, role/teaching, burial details, attractions, nearby places, culinary specialties, souvenirs, hours, ticket/donation, parking, etiquette, and references. The details supplied so far are shown as “Informasi sedang dilengkapi / Information is being completed.”
- All nine destinations: current opening hours, ticket/donation rules, parking details, crowd information, and accessibility information from site managers or official tourism sources.
- Sunan Ampel: reconcile No. 2A in the map link with No. 53 in the report.
- Sunan Giri and Sunan Bonang: confirm street-level address and site approach.
- Individual source URLs and page-level references for the five profiles. The Word report supplies grouped reference names, not citation URLs.
- Verify old project image credits and confirm the exact location represented by the existing Sunan Giri site image before using it as destination imagery.
- The five painted portraits embedded in the report were not used. They are unverified likenesses and should not be presented as authentic portraits.
- Google Drive folder access was not available in this workspace. Add original site, gate, mosque, landscape, food, and craft photos when available.

## Photo drop folders

- Destination photography: `public/assets/destinations/<destination-id>/`
- Culinary photography: `public/assets/culinary/<place-or-item>/`
- Product photography: `public/assets/products/<item>/`
- Cultural photography: `public/assets/culture/`

Recommended source sizes: homepage hero at least 2400 px wide; destination, food, and product photos at least 1600 px wide. Prefer WebP/AVIF derivatives, keep source originals, and compress any delivered file larger than about 400 KB. Include a credit and approved alt text when adding each file to `public/assets/MANIFEST.json`. Do not use tomb photos as hero imagery or the illustrated portraits as likenesses.

## Illustrations extracted from the supplied report

Four report images are available under `public/assets/culinary/`. Their manifest entries and UI captions say “Ilustrasi”; they are not represented as personal documentation. They are small source images; replace them with original high-resolution documentation when available. The five portrait illustrations were intentionally not copied into the website.
