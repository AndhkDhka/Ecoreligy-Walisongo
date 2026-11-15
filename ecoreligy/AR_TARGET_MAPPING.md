# AR target mapping

MindAR 1.2.5 bundle: `/assets/ar/walisongo-portraits.mind`  
Compiler input order is the target index order. Keep changes in `src/data/ar-walisongo-targets.json`; the AR stage reads indices from that file through `WALI_SONGO_TARGETS`.

| Index | Profile ID | Supplied JPG | Scan copy |
| ---: | --- | --- | --- |
| 0 | `malik-ibrahim` | `Maulana Malik Ibrahim.jpg` | `/assets/ar/portraits/maulana-malik-ibrahim.jpg` |
| 1 | `sunan-ampel` | `Sunan Ampel.jpg` | `/assets/ar/portraits/sunan-ampel.jpg` |
| 2 | `sunan-bonang` | `Sunan Bonang.jpg` | `/assets/ar/portraits/sunan-bonang.jpg` |
| 3 | `sunan-drajat` | `Sunan Drajat.jpg` | `/assets/ar/portraits/sunan-drajat.jpg` |
| 4 | `sunan-giri` | `Sunan Giri.jpg` | `/assets/ar/portraits/sunan-giri.jpg` |
| 5 | `sunan-gunung-jati` | `Sunan Gunung Jati.jpg` | `/assets/ar/portraits/sunan-gunung-jati.jpg` |
| 6 | `sunan-kalijaga` | `Sunan Kalijaga.jpg` | `/assets/ar/portraits/sunan-kalijaga.jpg` |
| 7 | `sunan-kudus` | `Sunan Kudus.jpg` | `/assets/ar/portraits/sunan-kudus.jpg` |
| 8 | `sunan-muria` | `Sunan Muria.jpg` | `/assets/ar/portraits/sunan-muria.jpg` |

The original JPGs are preserved. Image review found varied detail and some blank margin; Sunan Gunung Jati's supplied art has the largest white margin and compiled fewer tracking features. It still has non-empty tracking and matching data. The portraits are illustrative scan triggers, not authenticated historical likenesses.

`scripts/compile-ar-targets.mjs` checks the nine consecutive indices, JPEG signatures, decodes each image through canvas, compiles with MindAR's v1.2.5 offline compiler, then imports the serialized bundle again and validates all nine image/tracking/matching entries before writing the public `.mind` file. The bundle is approximately 3.18 MB.
