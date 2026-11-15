# AR Navigation Implementation

## Current behavior

- The working pilot is the Sunan Giri / Giri Kedaton image-tracking experience.
- `src/data/ar-experiences.ts` registers one target image and `/assets/ar/sunan-giri.mind`.
- `src/components/ar-stage.tsx` starts MindAR only after the visitor explicitly requests camera mode. It checks secure context and camera availability, tracks target-found/lost state, and tears down the camera/render loop when stopped.
- Three.js renders an abstract interpretive object anchored to the registered image. It is not a reconstruction of the tomb, architecture, or an artifact.
- A 3D preview and static image fallback are provided. The preview does not use the camera or spatial tracking.
- AR completion records do not prove that the visitor is physically at the site.

## Current target inventory

| Destination | Target | Status |
| --- | --- | --- |
| Sunan Giri | `public/assets/Document/Makam Sunan Giri.png` compiled as `public/assets/ar/sunan-giri.mind` | Available pilot; verify print/display quality in field |
| Other eight destinations | None registered | Manual Guided interpretation remains available |

## Add a target

1. Obtain permission to use a clear, stable landmark image and document its provenance.
2. Compile the image into a MindAR image target file using the MindAR compiler, then place that `.mind` file under `public/assets/ar/`.
3. Add an `ARExperienceDefinition` record in `src/data/ar-experiences.ts` with destination ID, image, target path, status, reconstruction note, and source/content status.
4. Connect target indices to the matching scene and sourced interpretation in `src/components/ar-stage.tsx` / `src/pages/ar-experience.tsx`.
5. Check camera permissions, target found/lost states, fallback behavior, mobile viewport, and HTTPS in the deployed environment.

MindAR image tracking only detects registered image targets. Spatial arrows, building recognition, and GPS-guided AR are not implemented.
