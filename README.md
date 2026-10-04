# Al Baz Engineering — albazkw.com

Marketing site for Al Baz Engineering, a Kuwaiti air conditioning company (supply, installation,
VRF and central systems, ducting, repairs, annual maintenance contracts, spare parts).
Plain HTML, CSS and a little JavaScript. No build step.

```
index.html      Home (English)
ar/             Arabic mirror of every page, right-to-left, Cairo font
services.html   Services (anchors: #install #replace #buyback #vrf #ducting #amc #repair #parts)
projects.html   Projects grid
about.html      About, values, team
contact.html    Contact form + map
css/styles.css  All styles. Brand tokens in :root mirror apps/web/src/app/globals.css in Baz ERP
js/main.js      Mobile nav, active link, contact form fallback
brand/          Logo (black lettering, white lettering) and app icon — same files as Baz ERP
fonts/          Space Grotesk + Cairo (OFL), self-hosted, same files as Baz ERP
img/photos/     Stock photography (Pexels License) with img/photos/CREDITS.md; same filenames = drop-in replacement
img/            pattern.svg
```

## SEO

Targets both languages: air conditioning, HVAC, AC, central AC / تكييف، مكيف، وحدة، سنترال، صيانة تكييف.

- Every page has a keyword-led title and description, a canonical URL, hreflang links (en, ar,
  x-default) and Open Graph tags. The Arabic pages live under `/ar/` with the same filenames.
- Structured data (JSON-LD): `HVACBusiness` on every page, `BreadcrumbList` on inner pages,
  `FAQPage` on the services pages (the visible FAQ section is the source).
- `sitemap.xml` lists all ten URLs with hreflang alternates; `robots.txt` points to it.
- The home pages carry a keyword paragraph with internal links; the services pages a FAQ.

After launch, do these by hand (they need the real business details and an account):

1. Fill the phone number and street address, then add them to the JSON-LD `HVACBusiness`
   block (`telephone`, `streetAddress`) in every page, or regenerate with a script.
2. Create a Google Business Profile for "Al Baz Engineering" with the same name, address and
   phone as the site, category "Air conditioning contractor", and link to albazkw.com. This is
   the single biggest factor for local "AC repair near me" searches in Kuwait.
3. Verify the site in Google Search Console and submit `sitemap.xml`.
4. Add real project photos with descriptive alt text (e.g. "VRF outdoor unit installation, Salwa").
5. Collect Google reviews; mention the area and service in replies.

## Photo treatment

Every photo gets one CSS treatment so stock shots from different photographers read as one set:
`saturate(0.65) contrast(1.06)` on tiles and the hero (behind a flat 64% ink scrim), and a
`.photo-tint` frame for secondary visuals that turns the image monochrome and lays ALBAZ Blue
over it with `mix-blend-mode: multiply`. No gradients or vignettes, in keeping with the brand.

## Theme

The site uses the ALBAZ brand "light refresh" shared with Baz ERP: Off-White `#F6F5F2`,
Black `#111111`, one accent ALBAZ Blue `#126AA8`, Bone `#ECEAE5` / Stone `#55534E`.
Flat, no shadows or gradients. Two gestures: the 3px black rule under the header and the
blue square after a heading. Space Grotesk for Latin, Cairo for Arabic (RTL-ready via
`dir="rtl"`). Keep `css/styles.css` tokens in step with the ERP's `globals.css`.

## Preview locally

```bash
npx --yes serve -l 8080 .
```

Then open http://localhost:8080.

## Deploy (domain is at Squarespace)

The domain `albazkw.com` is registered with Squarespace Domains. The site itself can be hosted on
any static host; Squarespace only needs to point DNS at it.

Recommended: **Cloudflare Pages** or **Netlify** (both free for a site like this, both give HTTPS).

1. Push this folder to a GitHub repository.
2. In Cloudflare Pages / Netlify, create a project from that repository. No build command,
   publish directory `/`.
3. Add the custom domain `albazkw.com` and `www.albazkw.com` in the host's dashboard. It will
   show the DNS records you need.
4. In Squarespace: Domains → albazkw.com → DNS settings. Delete the default Squarespace
   A/CNAME records for `@` and `www`, then add the records from step 3
   (typically a CNAME for `www` and either an A record or ALIAS/CNAME-flattened record for `@`).
5. Wait for DNS to propagate (minutes to a few hours). HTTPS is issued automatically.

Keep any existing MX records (email) untouched. Google Workspace or Microsoft 365 email on
albazkw.com is unaffected by moving the website.

## Contact form

- On **Netlify** the form works as-is (`data-netlify="true"`); enable form notifications to
  `info@albazkw.com` in the Netlify dashboard.
- On **Cloudflare Pages** or any other host, either point the form at a Formspree endpoint
  (`action="https://formspree.io/f/XXXX"`, remove `data-mode="mailto"`) or keep the current
  behaviour, which opens the visitor's email client with the enquiry pre-filled.

## To fill in before launch

- Phone number (search for `+965 XXXX XXXX` and `+965XXXXXXXX`)
- Office address (search for `Street, Block, Area`)
- Real project names and photos; brand logos for the "Brands we supply" row (Gree, Midea, LG, Samsung, York, Carrier)
- Team names and photos on the About page
- Founding year, units installed and the other statistics on the Home page; the opening hours in the top bar
- Google Maps embed location on the Contact page
- Replace the Pexels stock photos in img/photos/ with real Al Baz site photos (keep the filenames)
