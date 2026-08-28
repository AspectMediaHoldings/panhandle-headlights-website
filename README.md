# Panhandle Headlight Restoration — Website

Static single-page site for panhandleheadlights.com. Mobile headlight restoration in Marianna, FL and the Florida Panhandle, South AL, SW GA.

## Stack

- Static HTML/CSS/JS (no build step)
- Hosted on Netlify
- Netlify Forms for the quote form
- Cloudflare in front (optional — see setup guide in Drive)

## Deploy

Auto-deploys on push to `main` when connected to Netlify (site: `panhandle-headlights.netlify.app`).

Manual: drag-and-drop the repo root into Netlify Drop.

## Structure

```
.
├── index.html           # entire site — HTML, CSS, JS inline
├── favicon.ico          # 16+32+48 embedded
├── favicon-16.png
├── favicon-32.png
├── favicon-192.png      # Android chrome
├── favicon-512.png      # PWA / splash
├── apple-touch-icon.png # 180x180
├── og-image.jpg         # 1200x630 social share
├── logo-full.jpg        # original hi-res logo
├── netlify.toml         # publish + security headers
└── .gitignore
```

## Business info

- Phone: (850) 583-6322 (Google Voice)
- Email: info@panhandleheadlights.com
- Domain: panhandleheadlights.com (registered)

## Known TODOs

- [ ] `[STRIPE_DEPOSIT_LINK]` placeholder in `#quote` section — replace with real Stripe Payment Link when Panhandle Stripe account is created
- [ ] Before/after slider uses placeholder gradients — swap for real photos when available (`.ba-before` / `.ba-after` bg)
- [ ] Gallery section has 4 placeholder tiles — swap for real before/after job photos
- [ ] Netlify Forms notification: enable email alerts in Netlify dashboard → Forms → quote → Notifications
- [ ] Cloudflare migration: see Drive setup guide `panhandleheadlights.com — Cloudflare Setup Guide — 2026-08-21`
