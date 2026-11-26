# ALBAZ Engineering — albazkw.com

Marketing site for ALBAZ Engineering, an air conditioning company in Kuwait: new units sold
and installed, old units replaced and bought back, VRF and central systems, ducting,
maintenance contracts, repair and spare parts.

Static HTML, CSS and a little JavaScript. **Arabic is the default language at the site root;
English lives under `/en/`.**

```
tools/build.js   Generates every page. ALL COPY LIVES HERE (both languages)
css/site.css     All styles
js/site.js       Menu button, footer year, quote form
index.html …     Arabic pages (generated, do not edit by hand)
en/              English pages (generated)
brand/           Logo and app icon
fonts/           Cairo + Space Grotesk (OFL), self-hosted
img/photos/      Photography (Pexels License, see img/photos/CREDITS.md)
sitemap.xml, robots.txt   Generated
```

## Changing the site

Edit copy in `tools/build.js`, styles in `css/site.css`, then rebuild:

```bash
node tools/build.js
```

Preview:

```bash
npx --yes serve -l 8082 .
```

## Design

Direction "Arabic First", built to ALBAZ Brand Guidelines V3.0 (the ALBAZ Engineering Design
System). The rules the site follows:

- Off-white 60 · Black 25 · Blue 10 · Bone/Stone 5. Blue `#126AA8` marks one thing per screen:
  the headline's full stop (the blue square) or the main action.
- Arabic (Cairo) leads. Latin (Space Grotesk) supports, in letter-spaced caps labels.
- Square corners everywhere; the pill chip is the only rounded element. No shadows, no
  gradients, no icons.
- Section headers are `٠١ — Title` over a black hairline. Every page ends on the black
  contact block, then the logo on its own off-white band (the logo never sits on black).
- Photography is natural: no tints, no filters.

## SEO

- Keyword titles and descriptions in both languages (air conditioning, HVAC, AC /
  تكييف، مكيف، سنترال، شراء مكيفات مستعملة), canonical URLs, hreflang (ar, en, x-default = ar).
- JSON-LD: `HVACBusiness` on every page, `BreadcrumbList` on inner pages, `FAQPage` on services.
- `sitemap.xml` lists all ten URLs with hreflang alternates.

After launch: create a Google Business Profile ("Air conditioning contractor") with the same
name and phone as the site, verify the site in Google Search Console and submit the sitemap.

## Deploy (domain is at Squarespace)

1. Push this folder to GitHub and enable GitHub Pages (the `CNAME` file is already here).
2. In Squarespace: Domains → albazkw.com → DNS. Replace the default `@` and `www` records with
   GitHub Pages' four A records (185.199.108–111.153) and a `www` CNAME to `albazkw.github.io`.
   Leave MX records alone.

## Still needed from the business

- A full street address, if you want more than "Al Rai, Kuwait" (the address links to Google Maps).
- Real photos of jobs, team and vans to replace the stock set (keep the filenames).
- Real project names for the "Our work" page, which currently shows kinds of work only.
- Confirmation of the trade-in terms shown: same-day pricing, cash or credit, removal included.
- Whether a 24/7 emergency line exists (removed until confirmed).

## Search and AI visibility (added 2026-11-26)

- **One page per service.** The eight services each have their own page in both languages (`new-ac-units.html`, `ac-replacement.html`, `sell-used-ac.html`, `vrf-central-ac.html`, `ac-ducting.html`, `ac-maintenance.html`, `ac-repair.html`, `ac-spare-parts.html`). Their headline, Google title and description, opening paragraph and questions live in `tools/service-pages.js`. The list of what each service includes still lives in `SERVICES` in `tools/build.js`.
- **Titles and descriptions.** Keep titles under about 60 characters and descriptions under about 155. Longer ones get cut off in Google.
- **Photos.** Pages load light WebP copies. After adding or changing a photo in `img/photos`, run `npm install --no-save sharp` then `node tools/images.js`, then rebuild. This also remakes `img/og.jpg`, the picture shown when a link is shared.
- **Business facts for machines.** Every page carries the business details as structured data (name, phone, address, hours, service area, services). `llms.txt` states the same facts in plain text for AI assistants, and `robots.txt` allows search and AI crawlers. All three are written by `tools/build.js`, so a change to the phone, hours or address in that file updates them everywhere.
- **Only confirmed facts.** No prices, guarantees, response times, review scores or years in business unless the business has confirmed them.
