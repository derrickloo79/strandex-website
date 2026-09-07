# Strandex website

Static one-page site built from `documents/strandex-website-plan.md`. Plain HTML/CSS/JS,
no build step, no CMS.

## Run locally

```
cd /Users/derrickloo/Downloads/strandex-website
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Structure

```
index.html        all six sections + nav + footer
css/style.css      design tokens, layout, components
js/main.js         gallery lightbox, contact form submit
```

## What's placeholder right now

Anything wrapped in `[brackets]` in the copy (dashed oxide underline, hover for a
tooltip) is a placeholder from the plan — do not treat it as real before launch.

1. **Hero visual** — an SVG stand-in for the twisted-rope duotone photo the plan calls
   for. Replace `.rope-art` in `index.html` with a real `<picture>`/`<img>` (WebP +
   fallback) once photography exists, and remove `.hero-media-note`.
2. **Gallery** — four numbered placeholder tiles in `#gallery`. Replace each
   `.gallery-item` with a real image per the shot list in the plan (§3.5), and update
   `data-caption` / the `sr-only` alt text to match.
3. **Certificates** (`#certificates`) — bizSAFE Level 3, ACRA/UEN, and a third slot for
   any additional certification. Certificate numbers, dates, UEN, and the third
   certification's name/issuer are all unconfirmed — see plan §6 for the full list.
   No numbers or dates have been invented.
4. **Clients section** — built as Option B (sector framing: main contractors, crane/hoist
   operators, rigging suppliers) since no client logos or permissions were supplied. If
   Strandex wants the logo-grid version (Option A) instead, swap the `.sector-list` in
   `#clients` for an `<img>` grid once logos + written permission are in hand.
5. **Contact form** — `action="https://formspree.io/f/YOUR_FORM_ID"` in `index.html` is a
   placeholder. Sign up at formspree.io (or web3forms.com), create a form, and swap in
   the real endpoint. No backend is otherwise required.
6. **Direct contact details, footer, UEN, address** — all still `[bracketed]`.
7. **Headline** — shipped with Option A, "Every strand, accounted for." (the plan's
   recommended default). Options B and C are in the plan (§3.1) if a different tone is
   preferred.

## Design notes

- Colors, type, and the tick-mark section divider follow plan §4 exactly
  (`--color-ink`, `--color-paper`, `--color-steel`, `--color-oxide`; Fraunces for
  display, Source Serif 4 for body).
- Oxide (`#A63D2B`) is used only for the primary CTA, certificate seal marks, the
  section-divider ticks, and the placeholder-flag underlines — kept rare on purpose.
- Layout is left-aligned/asymmetric, mobile-first, with visible focus states and alt
  text placeholders on every image slot.
# strandex-website
