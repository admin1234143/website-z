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

Deployment (Cloudflare Pages via Wrangler):

1. Ensure you have an account and are logged in:

```bash
npx wrangler login
```

2. Install dependencies, build and publish the `dist/` folder to Cloudflare Pages:

```bash
npm install
npm run build
npx wrangler pages publish ./dist --project-name z-ascension-site
```

Note:
- Do NOT use `npx wrangler deploy` for Pages; that command targets Cloudflare Workers and will expect a worker bundle (hence the "workers-site/index.js" error).
- `wrangler pages publish` uploads the static `dist/` folder produced by Vite.
- If you prefer the Cloudflare dashboard, create a Pages project and connect your repo instead.


Files:
- [index.html](index.html)
- [src/App.jsx](src/App.jsx)
- [src/config.js](src/config.js)
- [src/styles.css](src/styles.css)
- [public/logo.png](public/logo.png) (add your logo here)
# website-z