# Cultural image guide

The interface uses CSS color fields and a subtle kawung-inspired geometric texture wherever a photograph is not assigned. This keeps missing documentary imagery from appearing as a broken image or being replaced by a fabricated historical scene.

## Photos currently in the project

These were found under `public/assets/Document/`. Confirm creator, license, subject, and caption before publishing them. A filename alone is not proof of attribution or subject.

| File | Suggested subject | Notes |
| --- | --- | --- |
| `Makam Sunan Giri.png` | Sunan Giri heritage complex | Used as a location image for the East Java journey, not as a portrait. Confirm the depicted site and image rights. |
| `Gapura.jpg` | Monument photograph (exact site not verified) | Used as an archive image with the exact site labeled unverified. Confirm subject, location, and rights. |
| `Batik Gresik.png` | Batik and textile craft | Available for a future craft feature; verify the pictured technique and maker. |
| `Damar kurung.png` | Damar Kurung art | Available for a living-culture feature; credit the photographer and artist. |
| `kampung kemasan.png` | Kampung Kemasan architecture | Available for a place or architecture profile; confirm source and rights. |
| `bandar grise.png` | Street view with Bandar Grisse sign | Used as an urban place image. Verify historical context and image rights before publication. |
| `Batu nisan.jpg` | Inscription or gravestone detail | Do not infer date, identity, or provenance from the filename. |
| `makam siti fatima.png` | Leran heritage site | Verify exact site and usage rights before assigning to a profile. |
| `kligrafi.jpg` | Calligraphy / visual culture | Verify maker, location, and rights before use. |
| `ikan sembilang.png` | Regional food | Verify dish identification and image rights before use. |

## Current homepage image placements

| Homepage section | Asset | Editorial context |
| --- | --- | --- |
| Cinematic hero | `heritage/kampung-kemasan-hero.jpg` | Optimized derivative of the aerial heritage architecture photo; non-tomb opening image. Verify caption and rights. |
| Cultural manifesto | `heritage/batik-gresik.jpg` | Optimized textile detail as a visual entry into living cultural practice. |
| Cultural archive | `heritage/damar-kurung.jpg`, `Document/Gapura.jpg`, `heritage/bandar-grisse.jpg` | Lantern art, a monument with unverified site, and urban place memory. Confirm each attribution. |
| Featured East Java journey | `heritage/sunan-giri-site.jpg` | Optimized location photo for a route that includes Gresik. It is not a figure portrait. |
| Living culture | `heritage/ikan-sembilang.jpg` | Optimized regional food image; verify dish identification and attribution. |
| Closing scene | `heritage/leran-heritage-walkway.jpg` | Optimized heritage walkway image. Exact location wording remains intentionally unverified. |

The optimized JPEG derivatives are generated from the originals and stored in `public/assets/heritage/`. Original archive files remain unchanged. The seven large homepage photos were reduced from about 18.2 MB total to about 2.3 MB total at the current export settings.

## Recommended additions

Add licensed, locally documented images as optimized WebP or AVIF files in `public/assets/heritage/`, with descriptive names such as `gresik-batik-process.webp`, `damar-kurung-lantern.webp`, `java-mosque-roof-detail.webp`, and `north-coast-market.webp`. Keep the original source, creator, license, location, and a factual caption in a small asset register before connecting an image to page content. Do not use generated imagery as historical evidence or as a portrait of a Wali Songo figure.

For a destination image, set that destination record's `cover` in `src/data.js` to `/assets/heritage/<filename>`. Keep `cover` unset until an appropriate image has been verified; the CSS placeholder will remain visible.
