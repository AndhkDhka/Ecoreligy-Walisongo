# EcoReligi Wali Songo AR Implementation Report

## Summary

The previous experience scanned one Sunan Giri site image. It could not recognize the nine supplied portraits because they were not registered in the running scanner's target bundle. The AR stage source was also missing from the current checkout, leaving the route's scanner import unresolved. The profile panel could receive bilingual `{ id, en }` objects through fallback fields and pass them directly to React, causing “Objects are not valid as a React child.”

The AR route now uses MindAR 1.2.5 with one compiled bundle containing all nine supplied portrait illustrations. A central ordered mapping connects each target index to its destination profile, source JPG, optimized scan copy, and content extracted from the supplied Word document. A successful target event opens that profile's 2D heritage panel; target loss clears the detected state and reacquisition restores it.

## Assets and content

- All nine user-provided JPGs are preserved unchanged under `public/assets/ar/`.
- Normalized scan copies are under `public/assets/ar/portraits/`. They were decoded and used to compile targets; the originals remain available.
- `docs/ar/Basis_Konten_AR_EcoReligi_Wali_Songo.docx` is the bundled source content document.
- `src/data/walisongo-ar-content.json` is generated from the complete document by `scripts/extract-ar-content.py`.
- Portraits are labeled as illustrative representations, not authenticated historical photos or likenesses.
- The panel separates narrative notes from factual certainty language, avoids invented map coordinates, and attaches the available source notes.

## Implementation

- `src/data/ar-walisongo-targets.json` is the canonical target order and ID map.
- `scripts/compile-ar-targets.mjs` uses MindAR 1.2.5's compatible offline compiler and Node canvas decoder to build and round-trip validate `public/assets/ar/walisongo-portraits.mind`.
- `src/components/ar-stage.tsx` starts one MindAR instance on user action, attaches one anchor per central index, reports status/error, and stops the scanner and camera tracks on stop/unmount.
- `src/pages/ar-experience.tsx` connects detected IDs to profile panels and per-figure Passport records, and offers a camera-free profile directory.
- `src/components/ar-heritage-panel.tsx` renders biography, history, tomb location, heritage items, and sources using explicit localized strings. It includes the portrait, source notes, and full destination link.
- The presentation is a responsive emerald-and-gold 2D overlay. It does not render an abstract 3D object.

## Status

| Area | Result |
| --- | --- |
| Image targets | 9 supplied JPGs compiled in source order |
| MindAR bundle | Validated round trip with 9 target images and non-empty tracking/matching data |
| Profile mapping | 9/9 index-to-destination entries, zero-based indices 0–8 |
| React child error | Fixed by explicit language selection and string coercion for bilingual values |
| Camera handling | User initiated, status/error messages present, cleanup on stop/unmount |
| Non-camera browsing | All nine profiles use the same source-backed panel data |
| Typecheck / lint / build | Passed (see `AR_TEST_REPORT.md`) |
| Physical camera scan | Not performed; requires a browser/device camera |

## Compile targets

In the `ecoreligy` directory, if the native canvas package has not been built on the current machine:

```powershell
npm rebuild canvas --ignore-scripts=false
npm run ar:compile-targets
```

The generated bundle is committed as a public asset, so browser runtime does not require the Word document or compiler.
