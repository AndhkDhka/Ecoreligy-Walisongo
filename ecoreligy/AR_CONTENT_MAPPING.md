# AR Content and Target Mapping

The AR panel reads from the canonical bilingual `DESTINATIONS` content in `src/data.js`. It does not maintain a second copy of the biographies. Tradition, uncertain dates, and unverified claims retain their existing labels and source notes.

## Portrait source mapping

These are the exact source filenames and mappings specified in the supplied build brief. None of the nine source files was found in this repository. Do not replace them with destination photographs or generated portraits.

| Source image | Profile ID | Portrait asset expected in `public/assets/ar/portraits/` | Composite target index |
| --- | --- | --- | ---: |
| `Picture1.jpg` | `sunan-drajat` | `sunan-drajat.jpg` | 0 |
| `Picture2.jpg` | `sunan-bonang` | `sunan-bonang.jpg` | 1 |
| `Picture3.jpg` | `sunan-giri` | `sunan-giri.jpg` | 2 |
| `Picture4.jpg` | `sunan-ampel` | `sunan-ampel.jpg` | 3 |
| `Picture5.jpg` | `malik-ibrahim` | `maulana-malik-ibrahim.jpg` | 4 |
| `Screenshot_20261110_115606.jpg` | `sunan-gunung-jati` | `sunan-gunung-jati.jpg` | 5 |
| `Screenshot_20261110_115533.jpg` | `sunan-muria` | `sunan-muria.jpg` | 6 |
| `Screenshot_20261110_115442.jpg` | `sunan-kalijaga` | `sunan-kalijaga.jpg` | 7 |
| `Screenshot_20261110_115505.jpg` | `sunan-kudus` | `sunan-kudus.jpg` | 8 |

`src/data/ar-walisongo.ts` is the mapping registry. The active legacy scan remains a separate map: target index `0` in `sunan-giri.mind` maps to `sunan-giri`. That legacy file is compiled from `/assets/Document/Makam Sunan Giri.png`, a site image, and is not one of the requested portraits.

## Add the nine portrait targets

1. Place the nine provided source images in `public/assets/ar/portraits/` using the expected filenames above. Keep the originals unchanged; any optimized copies should be separate files.
2. Compile all nine images together, in the table order, with the MindAR Image Targets Compiler: [MindAR compiler](https://hiukim.github.io/mind-ar-js-doc/tools/compile). The official workflow accepts image uploads and exports a `.mind` target bundle.
3. Save the exported bundle as `public/assets/ar/walisongo-portraits.mind`.
4. Update the scanner's `imageTargetSrc` to `/assets/ar/walisongo-portraits.mind` and map MindAR target indices `0`–`8` to `WALI_SONGO_TARGETS[index].destinationId`. Keep the legacy Giri bundle mapping separate until the new bundle is present and confirmed.
5. Confirm each target's found/lost events map to the same index, then test each printed or on-screen image on a physical camera device. Do not describe compilation or local build success as a camera test.

MindAR recognizes registered image targets only. It does not automatically recognize tombs, physical artifacts, or unrelated portraits.
