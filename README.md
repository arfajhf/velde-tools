# Veldeonix Labs

Static-first Astro website for `veldeonix.com`, built around useful browser tools, supporting guides, transparent methodology, and privacy-first defaults.

## Stack
- Astro 7.3.2
- TypeScript strict mode
- Tailwind CSS 4.3.3 through the official Vite plugin
- `@astrojs/sitemap`
- `qrcode` loaded only on the QR tool
- No database or required backend for the current tools

## Included tools
Developer: JSON Formatter, Base64 Encoder/Decoder, UUID v4 Generator, Unix Timestamp Converter.

Marketing: ROI, ROAS, CTR, CPM & CPC calculators.

Productivity: Word Counter, Secure Password Generator, QR Code Generator, Text Case Converter.

## Included trust and SEO foundation
- 8 supporting guides
- About and author profile
- Contact
- How We Create Content
- Privacy, Cookie, Terms, Disclaimer, Editorial, Corrections, Advertising pages
- Consent-gated optional GA4
- Search Console verification env value
- robots.txt and generated sitemap
- tool/article structured data
- dark mode
- responsive layout
- Cloudflare Pages headers and redirects

## Setup
```bash
npm install
npm run dev
```

Production check:
```bash
npm run build
npm run preview
```

Copy `.env.example` to `.env` when connecting services:
```env
PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
PUBLIC_GOOGLE_SITE_VERIFICATION=
```

## Before production
1. Create or replace `hello@veldeonix.com`, `privacy@veldeonix.com`, and `editorial@veldeonix.com`.
2. Review legal pages against the real hosting and analytics setup.
3. Add the real GA4 ID only after checking the consent flow.
4. Verify Search Console, preferably by DNS or with the env meta tag.
5. Test every tool on desktop and mobile.
6. Deploy, submit the sitemap, then monitor indexing, impressions, clicks, organic traffic, and traffic quality.
7. Do not add AdSense code until the site is ready. When monetization is added, update consent, privacy, cookie, advertising disclosure, and ads.txt to match the real configuration.

## Cloudflare Pages
Build command: `npm run build`

Output directory: `dist`

Use Node 22.12+ or a compatible current release.
