# AR Layout and Scanner Fix Report

## Changes made

- Centered the scanner in a 68rem wide stage, with a 4:3 desktop viewport and a 3:4 mobile viewport, rounded corners, and responsive target cards.
- Kept the camera video, MindAR renderer, and MindAR CSS renderer inside one clipped, positioned camera container. The video remains above the stage background, while the tracking canvas and CSS overlay sit above the video.
- Removed the forced video inset and 100% sizing. MindAR 1.2.5 calculates the video crop and offsets from its container and uses those values to align the camera with tracking coordinates; overriding them can desynchronize the view.
- Moved the full information panel below the camera, so its text and portrait no longer cover the live view. Added a collapsible nine portrait reference directory beneath the scanner.
- Added an explicit startup-in-progress state and disabled repeated start clicks while MindAR initializes. Existing camera track cleanup remains on stop and unmount.

## Root causes identified in source

- The old viewport CSS forced the video to `inset: 0`, `width: 100%`, `height: 100%`, and `object-fit: cover`, overriding MindAR's own video dimensions and centered crop. MindAR uses those dimensions when setting the projection and renderer to the container size.
- MindAR creates a video with `z-index: -2`. The viewport has a dark background and an isolated stacking context, so that video could render behind the background and appear black. The previous canvas selector expected a `.ar-renderer-canvas` class that this MindAR build does not assign to its renderer canvas.
- The recognized profile panel was positioned over the camera. The panel contains a portrait, navigation, and long information content, making the camera area crowded and obscuring the feed.
- A small portrait in the idle view is an intentional scan example, not a running tracking target. It is now centered in a clear idle state; scan reference cards are separated below the camera.

## Target and content status

- `public/assets/ar/walisongo-portraits.mind` exists. The repository's target mapping report records a MindAR 1.2.5 compiler round trip with nine ordered image/tracking/matching records.
- `src/data/ar-walisongo-targets.json` maps the nine supplied JPGs to profile IDs and indices 0–8: Malik Ibrahim, Ampel, Bonang, Drajat, Giri, Gunung Jati, Kalijaga, Kudus, Muria.
- The profile panel uses the repository's AR content data, sourced to `docs/ar/Basis_Konten_AR_EcoReligi_Wali_Songo.docx`, and canonical destination content. Existing uncertainty notes and citations are retained. This change does not verify the underlying history or tomb details independently.
- Prior target review in `AR_TARGET_MAPPING.md` notes that Gunung Jati has fewer compiled tracking features and may be less robust in physical scanning.

## Verification

- `npm run build`: passed. Existing notices remain for MindAR browser externalization and a 1.85 MB page chunk.
- `npm run typecheck`: passed.
- `npm run lint`: passed.
- `npm run audit:content`: passed with 0 errors and 47 warnings (missing non-AR photos, two destination/product relations, and historical claims without linked URLs); see `WEBSITE_QUALITY_AUDIT.md`.
- The repository's prior `AR_TEST_REPORT.md` records successful target bundle validation, mapping, build, and local production asset smoke checks.
- No physical camera was available in this code session. Camera permission, feed visibility, target found/lost behavior, orientation changes, and real-device tracking quality remain unverified here.

## Physical camera test steps

1. Serve the production build over HTTPS (or use localhost) and open `/ar` on a phone with a rear camera.
2. Start the scanner and grant camera permission. Confirm the live video fills the rounded scanner without a black background or corner thumbnail.
3. Scan each of the nine supplied reference illustrations individually in even light. Confirm the detected name and panel match the printed portrait; test Sunan Gunung Jati with extra care.
4. Move each image out of view and back. Confirm target-lost and reacquisition statuses update without a crash.
5. Rotate the device, stop the camera, navigate away, and revisit `/ar`. Confirm the layout resizes and the camera indicator turns off after stopping or leaving.
