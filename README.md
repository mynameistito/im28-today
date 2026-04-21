# im28-today

A birthday microsite for me turning 28, 3 prompts (incl. deployment) made w/ gpt-5.4 via ampcode.

Amp Thread: https://ampcode.com/threads/T-019dada3-7d3a-741e-9ea3-a982709e2d95

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
