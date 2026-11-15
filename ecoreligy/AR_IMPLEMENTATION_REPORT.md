# EcoReligi Wali Songo AR Implementation Report

## Audit summary

- The project is React 19, TypeScript, Vite, and TanStack Router. The AR route is `/ar`.
- MindAR Image Tracking and Three.js were already installed. The prior implementation tracked one Sunan Giri site image and rendered an abstract Three.js object.
- The existing `DESTINATIONS` records contain nine bilingual Wali Songo profiles, history sections, fact/certainty labels, location caveats, and reference links. These remain the shared content source.
- The supplied content basis was reviewed. Its named portrait files from a previous ZIP are not present in this repository; the only AR target file is the existing `sunan-giri.mind` compiled from a site image.

## Implementation

- Replaced the abstract 3D experience with a camera scanner that uses the existing MindAR target, reports searching/found/lost/error states, and stops camera tracks and render resources on exit.
- Added a shared holographic-style 2D heritage information panel with Biography, History, Tomb, Heritage, and Sources tabs.
- Added a nine-profile exploration directory that uses the same records as the scan result panel.
- Preserved the existing Digital Passport record action for a successfully detected AR experience; the record still does not claim to verify an on-site visit.
- Added `src/data/ar-walisongo.ts` with explicit portrait-to-profile order and a separate mapping for the one currently compiled legacy target.
- Added responsive layouts, visible focus states, reduced-motion handling, and a non-camera exploration path.

## Status

| Area | Status |
| --- | --- |
| Profile content | All nine profiles render from the canonical bilingual destination records. |
| Portrait source assets | 0 of 9 supplied in the repository. Expected filenames and original prompt mappings are in `AR_CONTENT_MAPPING.md`. |
| Portrait image tracking | 0 of 9 compiled; no portrait is substituted or described as a historical likeness. |
| Existing MindAR target | 1 site-image target: `public/assets/ar/sunan-giri.mind`, mapped to Sunan Giri. It is not a portrait target. |
| Camera behavior | Implemented; physical camera permission and tracking have not been tested in this environment. Requires HTTPS or localhost. |
| Information panel | Implemented and connected to shared profile records, including source and uncertainty notes. |
| Target `.mind` bundle for portraits | Not generated because the nine portrait files are absent. The documented compiler workflow is in `AR_CONTENT_MAPPING.md`. |
| Mobile / desktop / theme / camera tests | Not claimed as physically or visually tested. |

## Files

- Added: `src/data/ar-walisongo.ts`, `src/components/ar-heritage-panel.tsx`, `AR_IMPLEMENTATION_REPORT.md`, `AR_CONTENT_MAPPING.md`.
- Updated: `src/components/ar-stage.tsx`, `src/pages/ar-experience.tsx`, `src/styles.css`, `AR_IMPLEMENTATION.md`.

## Run locally

From the `ecoreligy` directory:

```bash
npm run dev
```

Open `http://localhost:3000/ar`. Use HTTPS for a deployed site to access the camera.

## Checks

- `npm run typecheck` — passed.
- `npm run lint` — passed.
- `npm run build` — passed. Vite reports pre-existing MindAR browser externalization notices and a large 1.69 MB MindAR chunk.
- Physical camera permissions, target acquisition/loss on a device, and nine-portrait mapping — not tested; portrait targets are not available.
- Responsive screenshots, theme review, and keyboard/screen-reader hands-on tests — not run.

A software build cannot verify physical camera permission, target recognition quality, or device-specific performance. No physical-camera test is claimed.
