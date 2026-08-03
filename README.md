# Jon Woodring — Portfolio Website

Personal portfolio built with **React 19** and webpack. No CSS framework — styling
is a small hand-rolled design system using CSS custom properties, with automatic
dark mode via `prefers-color-scheme`.

## Quick start

```bash
npm install
npm start        # dev server on http://localhost:3000 with hot reload
npm run build    # production build to dist/
```

## Structure

- `src/index.jsx` — React entry point
- `src/App.jsx` — page layout
- `src/components/` — one component per section (Header, Hero, About, Skills, Projects, Contact, Footer)
  - `Logo.jsx` — the "JW" monogram + wordmark
  - `Section.jsx` — shared section wrapper (kicker + title)
- `src/styles.css` — design tokens (`:root` custom properties) + component styles
- `public/index.html` — HTML template (title, meta description, favicon)

## Editing content

Section copy lives directly in each component. Skills and projects are plain
data arrays at the top of `Skills.jsx` and `Projects.jsx` — edit those to update
the cards.
