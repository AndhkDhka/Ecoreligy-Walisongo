# EcoReligi Journey

React + TypeScript SPA for exploring the Wali Songo heritage, places, and local culture of Java. Routing uses TanStack Router; styling uses Tailwind CSS v4 and shadcn/ui-compatible local components.

## Development

```sh
npm install
npm run dev
```

The Vite server runs on `http://localhost:3000`.

## Checks

```sh
npm run typecheck
npm run build
```

## Routes

- `/` home
- `/destinations` destination directory
- `/destinations/:id` destination profile
- `/journeys` guided, self-guided journeys
- `/journeys/:id` journey checkpoints
- `/map` approximate and source-verified map locations
- `/planner` flexible route planner
- `/tracker` digital passport
- `/timeline`, `/events`, `/culinary`, `/products`, `/booking`

## UI components

`components.json` configures the shadcn/ui aliases and Tailwind v4 stylesheet. Shared primitives are in `src/components/ui`; add or adapt shadcn components there as needed. Theme tokens are defined in `src/styles.css`.

## Data and storage

Destination, journey, timeline, event, food, and product content was migrated from the original `ecoreligi-journey-gresik` site into `src/data.js`. Local knowledge-base JSON and original image assets are served from `public/assets`. Language, theme, favorites, flexible plans, booking inquiries, and passport progress use the original `ejg_*` localStorage keys where applicable. All user data remains in the current browser; inquiries are not sent to an operator.

Map markers remain approximate unless a destination has source-backed verified coordinates. GPS auto check-in remains unavailable. The guide assistant searches the bundled knowledge files and does not use live data.
