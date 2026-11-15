# Test Report

## Checks executed

- `npm run generate-routes` — passed; generated the `/guided/$id` route and route types. The CLI emitted a Node circular-dependency warning.
- `npm run typecheck` — passed after implementation.
- `npm run lint` — passed after implementation.
- `npm run build` — passed. Vite reported MindAR browser externalization notices for Node modules (`fs`, `buffer`, `util`) and warned that the MindAR and Three.js chunks exceed 500 kB.
- Local Vite smoke check — `GET /guided/sunan-giri` returned HTTP 200; the MindAR target asset returned HTTP 200.
- Data check — confirmed nine records with `kind === "walisongo"`.

## Not exercised in this environment

- Camera permission, image-target detection, target found/lost behavior on a physical phone, and HTTPS deployment behavior.
- Actual GPS permission and position accuracy.
- Visual screenshot review at mobile, tablet, and desktop sizes, and hands-on keyboard/screen-reader review.
- Third-party Google Maps routes and actual conditions at each destination.

These remain field/device checks; the implementation does not claim those checks passed.
