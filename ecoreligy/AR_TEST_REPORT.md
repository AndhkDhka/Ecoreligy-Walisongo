# AR test report

## Automated checks

| Check | Result | Notes |
| --- | --- | --- |
| Source asset audit | Passed | Nine supplied JPEGs preserved; compiler decoded all nine successfully. |
| Target compilation | Passed | MindAR 1.2.5 offline compiler created `public/assets/ar/walisongo-portraits.mind`. |
| Bundle validation | Passed | Compiler round-trip import reported exactly nine ordered targets with image, tracking, and matching data. |
| Mapping | Passed | JSON mapping uses ordered indices 0–8 and the scanner installs an anchor for each configured index. |
| Typecheck | Passed | `npm run typecheck` |
| Lint | Passed | `npm run lint` |
| Production build | Passed | `npm run build`; output includes public assets. Build reports existing MindAR browser externalization notices and a large 1.85 MB page chunk. |
| Local production smoke | Passed | `vite preview` returned HTTP 200 for `/ar`, the `.mind` bundle, and a portrait JPEG. |

## Not verified in this environment

- Physical camera permission, live target acquisition/loss/reacquisition, and camera track shutdown on a real device.
- Direct browser interaction with every tab, keyboard and screen reader behavior, dark/light appearance, and mobile/desktop visual review.
- Remote Vercel deployment and direct deployed `/ar` route behavior. No deployment was published.

These checks require a browser/device session or deployment access. A successful build and `.mind` round-trip do not prove that camera scanning works under real lighting or on every phone. Gunung Jati's portrait has fewer compiled tracking features than the other targets, so it may be less robust in practice.
