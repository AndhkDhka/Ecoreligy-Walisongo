# Guided Navigation

- Route: `/guided/$id`, linked from each destination detail page and Wali Songo map popup.
- Stage 1 prepares the visitor and displays the destination summary and etiquette.
- Stage 2 offers a GPS permission request, approximate area caveat, and an external directions link. GPS is only a device position; it never asserts arrival.
- Stage 3 presents the existing destination profile sections in order, with previous/next controls, a manual explored marker, and an AR link only for Sunan Giri.
- Completion summarizes locally marked points and links back to the destination.
- Stage, point index, and manually marked points persist in local storage per destination (`ecoreligi-guided-<id>`). The flow remains usable if storage or GPS is unavailable.
- GPS-based arrival verification and indoor turn-by-turn instructions are not implemented. Destinations without verified coordinates use the manual route.
