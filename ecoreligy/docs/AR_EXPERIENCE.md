# EcoReligi Wali Songo · AR Heritage Experience

## Pilot and current implementation

- The first pilot is Sunan Giri / Giri Kedaton in Gresik.
- MindAR 1.2.5 performs image tracking. Three.js 0.177.0 renders an abstract, interactive object on the tracked image.
- The image target is `public/assets/Document/Makam Sunan Giri.png`; its compiled MindAR target is `public/assets/ar/sunan-giri.mind`.
- The geometry is explicitly an interpretive placeholder. It does not reconstruct Giri Kedaton, its mosque, the tomb, or a historical artefact. A documented and reviewed 3D asset is still needed for reconstruction.
- The story text and reference links come from the Sunan Giri destination entry in `src/data.js`. Its uncertainty notes remain visible in the destination profile and in the story text.
- Completed image-tracking experiences are saved under `ejg_ar_experience_records`. They are separate from `ejg_journey_state` and are never recorded as verified on-site visits.
- The project currently has no AR audio asset. No audio control is shown.

The source photo is already part of the project archive, but publication rights and attribution for it still need confirmation. Confirm the exact image with the project owner before public deployment.

## Run and test locally

1. Run `npm install` and `npm run dev`.
2. Open `http://localhost:3000/ar` in a current browser on a camera-equipped device. `localhost` is a secure context for local testing.
3. Press **Mulai pengalaman AR** / **Start AR experience**. Camera permission is requested only after this click.
4. Print `public/assets/Document/Makam Sunan Giri.png` or open it on a second screen. A phone cannot point its camera at an image displayed on that same phone.
5. Point the rear camera at the full image and move slowly until the target-found indicator appears. Use the scale/rotate controls; record completion to add an AR experience record to the Digital Passport.
6. Use the 3D preview when camera access or image tracking is unavailable. The preview is not AR and does not create an AR completion record.

For a phone on the same Wi-Fi, Vite can bind to the network with `npm run dev -- --host 0.0.0.0`. A network IP served over plain HTTP is not a secure camera context on most phones. Open the app through HTTPS when testing on a phone; production deployments must use HTTPS.

## Replace the image target

1. Choose a sharp, well-lit, high-detail image with features spread across the whole frame. Avoid blank areas, repeating patterns, glare, and images likely to change.
2. Confirm rights and attribution. Replace the source target image in `public/assets/Document/` and update `markerImage` in `src/data/ar-experiences.ts`.
3. Compile the replacement with the [MindAR Image Targets Compiler](https://hiukim.github.io/mind-ar-js-doc/tools/compile/). Download the `.mind` file into `public/assets/ar/`.
4. Update `markerTarget` in `src/data/ar-experiences.ts` and the `imageTargetSrc` URL in `src/components/ar-stage.tsx`. `addAnchor(0)` refers to the first compiled target.
5. Test the printed target under indoor and outdoor lighting, at more than one distance, on iOS Safari and Android Chrome.

## Add a destination experience

1. Add a record to `AR_EXPERIENCES` in `src/data/ar-experiences.ts` with an existing `destinationId`, target image and compiled target paths, implementation status, and reconstruction note.
2. Add source-backed story content and references to the existing destination data in `src/data.js`. Mark later scholarship and local tradition accurately; do not invent exact dates or historical architecture.
3. Add an explicit target index and scene configuration when supporting multiple markers. Do not mark a new experience ready until its `.mind` target, UI content, and tested scene are present.
4. To replace the placeholder with a 3D model, add a rights-cleared GLB/glTF asset, document its source and scale, load it under the corresponding MindAR anchor, and keep an interpretive/reconstruction label until the model has been historically reviewed.

## Required assets before public expansion

- Confirmed-use image target and attribution for the Sunan Giri photo.
- Historically reviewed, rights-cleared 3D model before claiming a reconstruction.
- Reviewed, source-linked story copy for any new pilot destination.
- Optional narration recorded with permission and captions/transcript before exposing audio controls.
