# Content Sources and Editorial Rules

Destination biographies, historical notes, facts, traditions, citations, uncertainty labels, practical notes, and existing culture/culinary/product records are maintained in `src/data.js` and the JSON knowledge files under `public/assets/data/knowledge/`.

The source references for each destination are embedded in its `sources` and `facts[].refs` records. UI copy should preserve `fact`, `academic_interpretation`, and `local_tradition` distinctions and the existing `contentStatus` caveats. Dates and genealogies reported through later sources must not be presented as settled contemporary evidence.

Operational details (hours, prices, facilities, accessibility, and crowding) are not verified consistently. The interface directs visitors to confirm these details with local site management. Approximate map-area coordinates are explicitly distinguished from verified coordinates.

Project photography is under `public/assets/heritage`, `public/assets/Document`, and `public/assets/culinary`. Check `ASSET_GUIDE.md` and verify image attribution before public release. No external Drive assets were accessed or claimed.
