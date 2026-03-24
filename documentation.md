# AI Agency Website - Concise Documentation

## Overview
This is a Vite + React single-page marketing site for **Axon AI**.
It uses `react-router` (browser routing), Tailwind CSS v4, and Motion animations.

## Tech Stack
- Build/dev: `vite`
- UI: React 18, Tailwind CSS v4
- Routing: `react-router`
- Icons: `lucide-react`
- Animation: `motion`

## Project Structure
- `src/main.tsx` - app entry; mounts `App` and global styles.
- `src/app/App.tsx` - router provider.
- `src/app/routes.ts` - route map.
- `src/app/layout/Root.tsx` - shared layout (Navbar + Footer + page outlet + scroll-to-top on route change).
- `src/app/pages/*.tsx` - route pages:
  - `Home`, `Services`, `HowItWorks`, `CaseStudies`, `About`, `Contact`, `NotFound`
- `src/app/components/Navbar.tsx`, `Footer.tsx` - shared shell components.
- `src/styles/` - layered global styling:
  - `index.css` imports `fonts.css`, `tailwind.css`, `theme.css`, `agency.css`

## Routing
Defined in `src/app/routes.ts`:
- `/` -> Home
- `/services`
- `/how-it-works`
- `/case-studies`
- `/about`
- `/contact`
- fallback `*` -> NotFound

## Behavior Notes
- Contact form is **frontend-only** right now (`src/app/pages/Contact.tsx`):
  - submission is simulated with `setTimeout`
  - no API request or backend integration
- Content (services, pricing, case studies, FAQs, stats) is hardcoded in page files.
- Dark visual theme is enforced via global styles (`agency.css`) and Tailwind classes.

## Scripts
From `package.json`:
- `npm run dev` - start local dev server
- `npm run build` - production build

## Setup
1. Install dependencies:
   - `npm i`
2. Run locally:
   - `npm run dev`
3. Build for production:
   - `npm run build`

## Configuration
- `vite.config.ts`
  - React + Tailwind Vite plugins enabled
  - path alias: `@` -> `./src`
  - raw assets include: `*.svg`, `*.csv`
- `postcss.config.mjs` is intentionally minimal (Tailwind v4 handled via Vite plugin).

## Deployment
This outputs a static Vite build (`dist/`) suitable for static hosting/CDN deployment.
Ensure SPA fallback is configured to `index.html` for client-side routes.

## Maintenance Notes
- A large `src/app/components/ui/` component library exists but is currently not imported by routed pages.
- If you connect the contact form to a backend, update `Contact.tsx` and this documentation accordingly.