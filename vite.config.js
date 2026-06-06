import { defineConfig } from "vite";

// FALU AG website — Vite build.
// The app code is hand-authored React/JSX that assigns each component to
// `window.X` and reads collaborators back off `window` at runtime. We keep that
// pattern intact and just precompile it (replacing the old in-browser Babel).
//
// jsxInject gives every .jsx file a local `React` binding, so the existing
// `React.useState` / `React.useEffect` references and JSX both resolve without
// relying on a global React script tag.
//
// d3 + topojson are still loaded via CDN <script> tags in index.html (they set
// window.d3 / window.topojson, which HomepageB's world map reads).
export default defineConfig({
  base: "/falu-website/",
  esbuild: {
    jsxInject: `import React from "react"`,
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
