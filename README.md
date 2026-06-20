# Z-Ascension — Vite + React Website

This project scaffolds a modern, responsive website for the Roblox game Z-Ascension using Vite + React.

Quick start:

1. Install dependencies

```bash
cd /workspaces/website-z
npm install
```

2. Add your `logo.png` to `public/logo.png`.

3. Edit `src/config.js` to set Discord, socials, stats and team.

4. Run dev server

```bash
npm run dev
```

Build:

```bash
npm run build
npm run preview
```

Deployment (Cloudflare Workers / Wrangler):

1. Ensure you have an account and are logged in:

```bash
npx wrangler login
```

2. Install dependencies and build (wrangler will also run the build command defined in `wrangler.toml`):

```bash
npm install
npx wrangler deploy
```

Notes:
- `wrangler.toml` is configured to build the Vite site and upload the `dist/` folder as the site bucket.
- If you prefer Cloudflare Pages, use `wrangler pages deploy ./dist --project-name <name>` instead.

Files:
- [index.html](index.html)
- [src/App.jsx](src/App.jsx)
- [src/config.js](src/config.js)
- [src/styles.css](src/styles.css)
- [public/logo.png](public/logo.png) (add your logo here)
# website-z