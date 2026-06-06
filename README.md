# FALU AG — Website

Static marketing site for FALU AG (Swiss manufacturer of cotton swab, cotton pad, and paper stick machinery). Built as hand-authored HTML + in-browser React/JSX (Babel standalone), no build step required.

## Run locally

It's fully static. Serve the folder with any static server, e.g.:

```bash
npx serve .
# or
python3 -m http.server
```

Then open `index.html` (the hash router handles all pages).

> Open via a server, not `file://` — the JSX files are loaded with `<script src>` and some browsers block that over `file://`.

## Entry points

- `index.html` — the live, browsable site (hash-routed). **Start here.**
- `Falu Website v2.html` — design-canvas view: every page laid out side-by-side for review (uses `design-canvas.jsx`).

## Structure

```
index.html                 # browsable site, loads all components + FaluRouter
styles/falu.css            # full design-system stylesheet (tokens, header, footer, buttons, nav)
components/
  FaluRouter.jsx           # hash-based router: maps #hash -> page component
  shared.jsx               # FaluHeader, FaluFooter, SectionLabel, ImageSlot
  HomepageB.jsx            # home (#home / #)
  Machinery.jsx            # machinery family index (#machinery)
  CottonSwabMachinery.jsx  # #cotton-swab-machinery
  CottonPadMachinery.jsx   # #cotton-pad-machinery
  PackingMachines.jsx      # #packing (swab packing overview)
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

1. **Production build.** In-browser Babel is fine for preview but slow for a public launch. Port to Vite/esbuild and pre-compile the JSX (extract each `window.X = function` into ES modules, mount `FaluRouter`).
2. **Real photography.** Every image is a labeled `ImageSlot` placeholder.
3. **Unbuilt stubs:** Imprint / Terms / Privacy / Downloads pages, and datasheet PDFs (download links).
4. **Responsive.** Designed at 1280px; needs a mobile pass.
