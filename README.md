# FALU AG — Website

Marketing site for FALU AG (Swiss manufacturer of cotton swab, cotton pad, and paper stick machinery). Hand-authored React/JSX, precompiled with Vite. The components keep their original `window.X = function` pattern; Vite just bundles them in place of the old in-browser Babel.

Live at https://marc450.github.io/falu-website/

## Run locally

```bash
npm install
npm run dev      # dev server with HMR
```

```bash
npm run build    # production build to dist/
npm run preview  # serve the built dist/ locally
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and publishes `dist/` to GitHub Pages. No manual step.

## Entry points

- `index.html` — page shell: loads fonts + d3/topojson (CDN) and the bundled `main.jsx`.
- `main.jsx` — imports every component module (for their `window.X` side effects) and mounts `FaluRouter`.

## Structure

```
index.html                 # page shell, loads main.jsx (bundled)
main.jsx                   # entry: imports components + mounts FaluRouter
vite.config.js             # build config (base path, jsxInject)
styles/falu.css            # full design-system stylesheet (tokens, header, footer, buttons, nav)
components/
  FaluRouter.jsx           # hash-based router: maps #hash -> page component
  shared.jsx               # FaluHeader, FaluFooter, SectionLabel, ImageSlot
  HomepageB.jsx            # home (#home / #)
  Machinery.jsx            # machinery family index (#machinery)
  CottonSwabMachinery.jsx  # #cotton-swab-machinery
  CottonPadMachinery.jsx   # #cotton-pad-machinery
  PackingMachines.jsx      # #packing (swab packaging overview)
  MachineCB1.jsx           # #cb1 (bespoke flagship detail page)
  MachinePRX.jsx           # #prx (bespoke detail page)
  machines-data.jsx        # FALU_MACHINES data for the generic detail template
  MachineDetail.jsx        # generic, data-driven detail page (#sv2x, #rb30a, #polybag,
                           #   #sqb2a, #bl12, #wr600, #wr2100, #vp2, #rb2)
  Services.jsx             # #services
  About.jsx                # #about / #about-us
  Careers.jsx              # #careers
  Contact.jsx              # #contact / #quote
assets/falu-logo.png       # logo (keep as-is, never recreate)
design-system/             # portable design system: README, tokens, SKILL.md, preview cards
BRAND_RULES.md             # standing brand + copy rules (read before editing copy)
```

## Routing

`FaluRouter.jsx` reads `window.location.hash` and renders the matching page, scrolling to top on change. Machine-detail pages share the `MachineDetail` component, driven by data objects in `machines-data.jsx` (keyed by id, e.g. `sv2x`, `vp2`). Footer legal stubs (imprint/terms/privacy), downloads, and PDF links currently fall back to home.

## Brand rules (important)

See `BRAND_RULES.md` and `design-system/README.md`. Highlights:

- Type: **Inter** (UI/body), **JetBrains Mono** (technical labels only).
- Colors: navy `#002e5b` structure, red `rgb(236,28,36)` for CTAs/active/numerals only, never dominant.
- **Zero border-radius everywhere.**
- **Never use en dashes (–) or em dashes (—).** Use commas, periods, colons, parentheses. Hyphens in compound words are fine.
- Swiss thousands separator: `3'100`, `1'000`.
- No emoji, no decorative eyebrow phrases above headlines (numbered section labels are OK).
- Logo image only — do not set "FALU AG" in type beside it.

## Known follow-ups

1. **Real photography.** Every image is a labeled `ImageSlot` placeholder.
2. **Unbuilt stubs:** Imprint / Terms / Privacy / Downloads pages, and datasheet PDFs (download links).
3. **Responsive.** Designed at 1280px; needs a mobile pass.
4. **Bundle d3/topojson.** Currently loaded from CDN at runtime; could be bundled for full offline-of-CDN reliability.
