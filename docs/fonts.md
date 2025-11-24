# Fonts: self-hosted and CDN

Two ways to use custom fonts in this theme: self-host in `src/skin/fonts/` or link a CDN in `_includes.ascx`.

## Self-hosted
1. Add font files to `src/skin/fonts/` (e.g., `.woff2`, `.woff`). The template ships with Ubuntu (OFL).
2. Update `@font-face` in `src/skin/css/tailwind.css` to point at `../fonts/YourFont.woff2` and set `font-weight`/`font-style`.
3. Reference the family in your components or theme tokens (e.g., `--font-body` in `@theme`).
4. (Optional) Add `<link rel="preload" ...>` entries in `src/skin/partials/_includes.ascx` to preload the woff2 files.
5. Run `npm run build` (or `dev`) and sync `src/skin/` to `dist/ThemeSkin/` before deploying.

Example `@font-face`:
```css
@font-face {
  font-family: "MyFont";
  src:
    url("../fonts/MyFont-Regular.woff2") format("woff2"),
    url("../fonts/MyFont-Regular.woff") format("woff");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

## CDN-served fonts
If you prefer a CDN (e.g., Google Fonts), add the `<link>` tags to `src/skin/partials/_includes.ascx` so every skin page loads them:

```html
<!-- Font CDN (example: Google Fonts) -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
  rel="stylesheet"
/>
```

Then set the family in your CSS (e.g., `--font-body: "Inter", ui-sans-serif;` or a utility class).

Note: choose one approach (self-host or CDN) to avoid double-loading fonts.
