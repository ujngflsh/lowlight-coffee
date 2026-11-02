# Lowlight Coffee

A fictional coffee-bar landing page built as a front-end portfolio concept by Ujang. The brand, address, menu, prices, opening hours and contact details are illustrative and do not represent a real business.

## Stack

- Astro
- Tailwind CSS v4 via the Vite plugin
- TypeScript in Astro component scripts
- Astro Assets for responsive, optimized local images
- Fontsource for self-hosted typography

## Requirements

- Node.js 22.12.0 or newer (Astro 7 requirement)
- npm

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:4321`.

```bash
npm run build
npm run preview
```

The production output is generated in `dist/`.

## Project structure

```text
src/
  assets/photos/       Optional local photography
  components/          Page sections
  data/site.ts         All fictional business content
  layouts/Base.astro   Document shell and SEO metadata
  lib/photos.ts        Photo lookup and metadata
  pages/               Homepage and 404 page
  styles/global.css    Design tokens and global styles
public/                Static public assets
scripts/               Asset-generation scripts
```

## Add photography

The site intentionally ships without stock photography. It remains functional using its CSS/SVG visual treatment when no photos are present.

1. Add licensed images to `src/assets/photos/` using these basenames: `hero`, `bar-1`, `bar-2`, `bar-3`, `bar-4`, `bar-5`, and `bar-6`.
2. Supported formats: JPG, JPEG, PNG, WebP and AVIF.
3. Update each matching entry in `photos` inside `src/data/site.ts` with accurate alt text and photographer/source credit.
4. Do not publish images without permission or omit required attribution.

Astro generates responsive image variants at build time. Gallery slots without an image are omitted automatically.

## Reservation form

The form is intentionally in demo mode by default. It validates the fields in the browser and clearly tells visitors that no request has been sent.

To connect a test endpoint:

1. Copy `.env.example` to `.env`.
2. Set `PUBLIC_FORM_ENDPOINT` to a Formspree/Web3Forms endpoint you control.
3. Configure the same variable in your deployment provider and redeploy.
4. Enable spam protection in the form provider and test delivery using non-sensitive sample data.

`PUBLIC_` variables are exposed to the browser. Never put API secrets or private credentials in them. Client-side validation and a honeypot are not substitutes for server-side validation, rate limiting, or provider-side spam controls. A successful HTTP response means the provider accepted the submission, not that a real café reservation has been confirmed.

## SEO and deployment

Set `SITE_URL` to the deployed site's origin (for example `https://your-domain.example`) in the deployment environment. This enables canonical URLs and absolute Open Graph/Twitter image URLs. Do not set it to a domain you do not control.

For Vercel: push the project to GitHub, import the repository into Vercel, set `SITE_URL` and any optional form endpoint, then deploy. Verify the deployed canonical URL, social preview, 404 page and form behavior.

## Quality checks before publishing

```bash
npm run build
```

Then manually test:

- Mobile navigation by touch, keyboard and Escape key.
- All anchor links and the skip link.
- Drink selector with keyboard and screen reader announcements.
- Reservation form validation, demo mode and endpoint failure states.
- Layout at narrow mobile, tablet and desktop widths.
- Page title, description, canonical URL and social preview on the deployed domain.
- Lighthouse on the deployed build with the final licensed images.

Do not claim Lighthouse scores, client results, real booking functionality or business performance unless you have measured and verified them.

## Content and design

Edit text, prices, hours and drink data in `src/data/site.ts`. Edit theme colors, typography and reusable styles in `src/styles/global.css`.

Regenerate the social preview artwork after changing its design:

```bash
npm run og
```
