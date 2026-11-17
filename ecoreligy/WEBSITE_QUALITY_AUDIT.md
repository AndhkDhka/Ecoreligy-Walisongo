# Website Quality Audit

## Scope and method

Reviewed the current React/TanStack/Vite source, route declarations, shared styling, destination and AR data, asset manifests, and existing audit notes. The app has home, destination list/detail, map, AR, visit information, guided journeys, planner, timeline, tracker, events, culture, culinary, products, and booking routes. The existing site-wide baseline in `FULL_SITE_AUDIT.md` and source caveats in `SOURCE_VERIFICATION_REPORT.md` remain relevant. This pass implemented the scanner layout and camera-layer corrections; it was not a full manual browser audit of every page.

## Findings and fixes

- **AR camera geometry:** Scanner CSS overrode MindAR's runtime video crop and dimensions. Removed those sizing overrides and preserved MindAR's container-derived video/canvas geometry.
- **Black camera appearance:** MindAR's video is initially assigned `z-index: -2`; the isolated dark scanner could paint above it. The video is now explicitly layered above the scanner background. The MindAR canvas is styled generically rather than relying on a class this version does not add.
- **AR composition:** The full hologram panel obscured the camera feed. It now renders below the scanner. The nine reference portraits have a distinct, collapsible guide section.
- **Repeated startup:** Added a disabled/loading button state during initialization to prevent repeated starts.
- **Nine target mappings:** All nine mapped portrait assets and indices are present per `AR_TARGET_MAPPING.md`. The compiled bundle validation is documented there and in `AR_TEST_REPORT.md`; physical recognition is not established by those checks.
- **Profile content:** Nine destination profiles are present. AR profiles combine the provided Word-derived content data and canonical destination records, with uncertainty notes and source tabs. Content audit still reports ten historical claims without a directly linked URL; those require source research and are not silently presented as independently verified facts.

## Whole-site audit notes

- Existing routes are retained; no route or major feature was removed in this patch.
- `npm run audit:content` reports 0 integrity errors and 47 warnings. Warnings include missing optional food/product imagery (the UI fallback is expected), two destinations without product relations, and ten claims without linked URLs. The script states the integrity check passed.
- The prior full-site audit identifies profile content gaps, image attribution/provenance limitations, and other data completeness issues. They remain follow-up items; this AR-scoped change does not claim to resolve them.
- Automated checks do not establish 360/390px, tablet, laptop, 1920px, dark/light, keyboard, or screen-reader visual behavior. These still need browser review.
- No physical camera/device or deployed Vercel session was exercised. Live camera permission, image acquisition, target loss/reacquisition, rotation, and route cleanup should be tested using the steps in `AR_LAYOUT_FIX_REPORT.md`.

## Checks run

| Check                                         | Result                                                                          |
| --------------------------------------------- | ------------------------------------------------------------------------------- |
| Production build (`npm run build`)            | Passed; existing MindAR externalization notices and large-chunk warning remain. |
| Typecheck (`npm run typecheck`)               | Passed.                                                                         |
| Lint (`npm run lint`)                         | Passed.                                                                         |
| Content integrity (`npm run audit:content`)   | 0 errors; 47 warnings.                                                          |
| Physical camera and live AR                   | Not tested in this environment.                                                 |
| Full responsive and dark/light browser review | Not tested in this environment.                                                 |
| Deployed site / Vercel routes                 | Not tested in this environment.                                                 |

## Remaining follow-up

- Test all nine targets with a physical camera and representative printed/on-screen reference images.
- Browser-check scanner sizing at 360px, 390px, tablet, laptop, and 1920px, including portrait/landscape rotation and dark/light theme.
- Research and attach direct sources to the ten flagged historical claims.
- Review the 47 content warnings and update records where missing imagery/relations should remain intentionally empty or can be supported with verified data.
- Consider splitting the large page chunk after measuring its effect on route load performance.
