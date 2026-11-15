# Audit Report

## Baseline before redesign

- Framework: React 19 + TypeScript, Vite 8, TanStack Router 1.170, Tailwind CSS 4.
- Mapping: Leaflet 1.9 with React Leaflet; destinations have unverified exact coordinates and approximate area points.
- AR: MindAR image tracking 1.2.5 and Three.js 0.151. One Sunan Giri `.mind` target is registered. The AR model is explicitly an abstract interpretation, not a site reconstruction.
- Data: `src/data.js` contains nine Wali Songo destination profiles plus other heritage places, stories, culinary, product, journey, event and timeline data. History records include source/certainty notes.
- Navigation: the shared shell exposed AR, Cultural Discovery, destinations, map, Digital Passport, culinary, products and visit information. Planner, journeys, tracker, events, booking and timeline routes also existed.
- Guided: no per-destination guided route existed. The legacy journey/check-in flow was separate and included local progress records.
- Theme: light/dark CSS tokens and a persisted theme toggle were already present.
- Assets: site photography and a Sunan Giri AR target exist under `public/assets`; many destination profile cover paths remain empty.

## Risks and constraints

- No exact Wali Songo tomb coordinate is marked verified; map markers must remain labelled as approximate.
- Camera access requires HTTPS or localhost and browser permission.
- Only Sunan Giri has a registered image target. MindAR does not identify unregistered buildings or objects.
- Operational details (hours, fees, facilities) are not consistently verified and should remain caveated.
- Historical writing distinguishes fact, academic interpretation and local tradition; preserve those labels and source notes.
- Existing deep links are retained while the primary navigation is simplified.
