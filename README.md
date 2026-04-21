# im28-today

A birthday microsite for `myisnametito` turning 28.

## Stack

- Vite + TypeScript
- Hand-built HTML, CSS, and a tiny bit of browser-side interactivity
- Cloudflare Workers static assets via Wrangler

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Deploy To Cloudflare

This repo is set up to deploy as a static site on Cloudflare Workers instead of Pages. That keeps the project aligned with Cloudflare's current Vite guidance for new projects while staying just as simple for a static site.

```bash
npm install
npx wrangler login
npm run deploy
```

After deploy, Cloudflare will give you a `*.workers.dev` URL. You can attach a custom domain from the Cloudflare dashboard whenever you want.
