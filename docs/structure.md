# Project structure

Source/patterns vs. dist layout for this Tailwind v4 DNN skin.

## Folders

- `src/skin/` — DNN-facing assets that ship with the theme (ASCX partials, menus, fonts, images, skin XML, default skins, Tailwind entry CSS).
- `src/patterns/` — HTML prototypes, catalog pages, and sandboxes used to exercise Tailwind JIT and iterate on UI without touching the shipped skins.
- `dist/ThemeSkin/` — Deployable skin package. After building, copy the contents of `src/skin/` here and include the compiled CSS from `npm run build`.
- `docs/` — Project notes, setup, and structure docs (this file).

## Build and package flow

1. Develop in `src/skin/` (ASCX/menus) and `src/patterns/` (HTML prototypes).
2. Run `npm run dev` (or `dev:poll`) to watch and build `dist/ThemeSkin/css/skin.min.css` from `src/skin/css/tailwind.css`.
3. When ready to deploy, copy everything from `src/skin/` into `dist/ThemeSkin/`, then add the compiled `dist/ThemeSkin/css/skin.min.css` (overwrite if present). Example:
   ```bash
   rsync -av src/skin/ dist/ThemeSkin/ --delete
   # (optional) remove tailwind source if you don't want to ship it
   ```
4. Zip `dist/ThemeSkin/` or copy it into your DNN site’s `/Portals/_default/Skins/YourThemeName/`.

## Pattern pages builder (optional)

- Author pattern pages in `src/patterns/pages/` and partials in `src/patterns/partials/`.
- Use include markers: `<!-- @include ../partials/navbar.html -->`.
- Run `npm run patterns` (or `npm run patterns:watch`) to render includes into `public/pages/`, then serve `public/` with your static server (or `npm run serve:patterns`) for previews.
