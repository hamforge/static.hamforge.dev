# Hamforge

This is a static Tailwind landing page project converted from the original HTML snapshot.

## What is included
- `public/index.html` — the landing page
- `src/input.css` — Tailwind entry file
- `tailwind.config.js` — Tailwind theme with `forge` colors
- `postcss.config.js`
- `package.json`
- `BRAND.md`
- `DEPLOY.md`

## Run locally

1. Install dependencies

```bash
npm install
```

2. Build Tailwind CSS

```bash
npm run build
```

3. Watch Tailwind while editing

```bash
npm run watch
```

4. Open the page
- Open `public/index.html` in your browser after building, or
- use any simple local static server if you prefer

## Notes
- This project keeps the **same content and structure** as the uploaded HTML.
- The CDN Tailwind script was removed and replaced with a compiled stylesheet:
  - `./assets/app.css`
- Real logos can be added later in `public/images/` and swapped into the HTML.
