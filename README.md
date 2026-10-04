# Al Baz Engineering — albazkw.com

Static marketing site: plain HTML, CSS and a little JavaScript. No build step.

```
index.html      Home
services.html   Services (anchors: #mep #civil #maintenance #pm #design #supply)
projects.html   Projects grid
about.html      About, values, team
contact.html    Contact form + map
css/styles.css  All styles (colours in :root)
js/main.js      Mobile nav, active link, contact form fallback
img/            SVG hero, pattern, favicon
```

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
- Real project names, photos and client logos
- Team names and photos on the About page
- Founding year and statistics on the Home page
- Google Maps embed location on the Contact page
- Replace `img/hero.svg` with a real site photo if available (keep the same filename)
