# Full Site Audit (Baseline)

## Repository and UI

- React 19, TypeScript, Vite 8, TanStack Router, Tailwind 4; shared shell and route pages are under `src/`.
- Core destination data is in `src/data.js`, with a completion overlay in `src/destination-completion.js`; image metadata is `public/assets/MANIFEST.json`.
- Destination rendering is in `src/pages.tsx` and `src/components/destination-content.tsx`. `ManifestPhoto` resolves captions, credits, and placeholders.
- Routes include Home, destination index/detail, map, AR, Guided, visit information, and compatibility routes for legacy modules.
- Light/dark theme tokens are in `src/styles.css`; previous round introduced five-item main navigation and Guided links.

## Baseline findings

- Nine Wali Songo records exist. Each has seven history section keys, but four destination overlays (Kudus, Muria, Kalijaga, Gunung Jati) set profile fields to “Information is being completed,” `contentStatus: needs-source`, empty references, and no food/product relations.
- `DestinationContent` returned early for those four, suppressing even useful profile categories. Elsewhere, it showed text lists plus links to legacy Culinary/Products routes, not visual cards.
- Only Sunan Giri had a destination gallery entry. The other eight had none. The existing Giri image caption itself says exact photo location/credit need confirmation.
- Nineteen culinary records and 21 products exist. Only four culinary paths are image-bearing; all are explicitly marked illustrations in the manifest/data. Product paths are limited to a Gresik batik image and an illustration of pudak / wingko. Most product and food records have no image.
- The local “otak-otak bandeng” illustration visually depicts whole grilled fish and is not a reliable match for that named preparation; it must not be displayed as documentary food evidence.
- Historical `fact.type` codes (`historical_fact`, etc.) were rendered directly as badges. Sources were not connected to individual fact paragraphs in the UI.
- Attractions and nearby lists were concatenated without duplicate removal. Empty, null, and “Information is being completed.” fields were not handled consistently.
- Several current and legacy source references are plain organization names or a project report filename, with no article URL. The report file itself is not in the repository.

## Asset inspection

The ten files under `public/assets/Document/` and four culinary images were visually reviewed. Subjects include a Sunan Giri gate/site, a generic unprovenanced carved stone, the entrance to Makam Siti Fatimah, a Gresik monument, Kampung Kemasan architecture, Bandar Grissee street scene, Damar Kurung, Batik Gresik, a fish dish, and calligraphy. Filenames alone are not used to assign unverified locations. No connected Google Drive folder or Drive image asset was available in the repository/tool context.

## Constraints carried into implementation

- Keep all old routes and the existing data shape compatible.
- Use local/verified images only with matching dish or site; otherwise display a labeled placeholder.
- Distinguish a regional item from something sold at/near the tomb.
- Do not invent hours, prices, accessibility, facilities, seller details, provenance, or historical certainty.
