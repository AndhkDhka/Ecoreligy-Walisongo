# AR Experience

The `/ar` route has two paths:

- **Scan:** MindAR tracks the existing Sunan Giri heritage-site image target in `public/assets/ar/sunan-giri.mind`. On target-found, the same sourced Sunan Giri profile used by the explorer is selected. This is a site-image target, not the portrait target requested in the supplied brief.
- **Explore:** Visitors can open any of the nine Wali Songo profile panels without camera access.

The panel is a 2D glass-style heritage overlay with Biography, History, Tomb, Heritage, and Sources tabs. Content comes from the canonical bilingual destination records in `src/data.js`; historical uncertainty and source notes are retained. No abstract 3D object or historical portrait claim is used.

Camera access requires HTTPS or localhost. Camera tracks, the MindAR renderer, listeners, timers, and DOM nodes are cleaned up when scanning stops or the page unmounts.

## Target availability

- One existing target: Sunan Giri site image.
- Requested portrait targets: none compiled; source images were not present in the project.
- The exact nine-image mapping, missing filenames, and compiler steps are in `AR_CONTENT_MAPPING.md`.

MindAR image tracking recognizes only images registered in its compiled target bundle. It does not recognize arbitrary portraits, tombs, or artifacts.
