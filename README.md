# DNN Tailwind Theme

A modern, responsive DotNetNuke theme built with **Tailwind CSS v4** and a clean CSS-first workflow.

## Features

- 🎨 **Tailwind CSS v4** with CSS-first configuration
- 🚫 **No Preflight** - preserves existing DNN styles
- 🅰️ **Bundled Ubuntu font** (self-hosted, OFL)
- 🔧 **Server-Agnostic** - works on any DNN installation
- 📦 **Template-Ready** - GitHub starter template

## Prerequisites

- **Node.js** LTS (v18 or higher)
- **npm** (comes with Node.js)
- **DotNetNuke** installation

## Quick Start

1. **Clone or download** this theme
2. **Install dependencies**:
   ```bash
   npm ci
   ```
3. **Start development**:
   ```bash
   npm run dev
   ```
4. **Optional: build the pattern demo** (for a starter page preview)
   ```bash
   npm run patterns
   ```
   Open `public/pages/example.html` (serve `public/` with your static server for best results).
5. **Copy `src/skin/` into `dist/ThemeSkin/` and build CSS** (see Deployment below)
6. **Apply the theme** in DNN Admin → Site Settings → Appearance

## Development Workflow

### Available Scripts

- `npm run dev` - Start development with file watching
- `npm run dev:poll` - Use polling for SMB/NAS file systems
- `npm run build` - Build production CSS
- `npm run patterns` - Compile pattern pages by resolving `<!-- @include ... -->` into `public/pages/`
- `npm run patterns:watch` - Rebuild pattern pages on change
- `npm run serve:patterns` - Serve `public/` at http://localhost:4173 for preview

### Starter demo

- Pages live in `src/patterns/pages/`, partials in `src/patterns/partials/`.
- Run `npm run patterns` to output to `public/pages/`, then serve `public/` (e.g., with Five Server). Open `public/pages/example.html` to see the starter UI.

### CSS-First Configuration

This theme uses Tailwind v4's CSS-first approach. Configuration is in `src/skin/css/tailwind.css`:

```css
/* Import Tailwind */
@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/utilities.css" layer(utilities);

/* Tell Tailwind where to scan for classes */
@source "../";
@source "../**/*.{ascx,aspx,cshtml,razor,html,js}";
@source "../../patterns/**/*.{html,js,cshtml}";
```

### Using Tailwind Classes

```html
<div class="flex items-center justify-between">
  <h1 class="text-2xl font-bold">Welcome</h1>
  <button class="btn-primary">Get Started</button>
</div>
```

**Hover states** work directly in HTML:
```html
<button class="hover:bg-red-800">Hover me</button>
```

### Custom Components

Define reusable components in `css/tailwind.css`:

```css
@layer components {
  /* Add your custom components here */
  .btn-primary {
    @apply inline-flex items-center rounded-xl bg-red-700 text-white px-5 py-3;
  }
  .btn-primary:hover {
    @apply bg-red-800;
  }
}
```

**Note:** For hover states in `@apply`, use separate CSS selectors (not inline `hover:bg-red-800`).

### Typography Plugin Limitation

**Important:** The `@tailwindcss/typography` plugin is not compatible with Tailwind CSS v4 at this time. If you need typography styling, use individual Tailwind classes or create custom components.

For rich text content, you can create custom components using `@apply`:

```css
@layer components {
  .content-prose {
    @apply max-w-none text-gray-700;
  }
  .content-prose h1 {
    @apply font-ubuntu text-4xl font-bold text-gray-900 mb-6 mt-8;
  }
  .content-prose p {
    @apply mb-4 leading-relaxed;
  }
}
```

## File Structure

```
├── src/
│   ├── skin/                 # DNN-facing skin assets
│   │   ├── css/tailwind.css  # Tailwind v4 entry
│   │   ├── partials/         # ASCX includes (header/footer/includes/registers)
│   │   ├── menus/            # DDRMenu templates
│   │   ├── fonts/            # Self-hosted fonts
│   │   ├── default.ascx      # Main skin file
│   │   ├── popUpSkin.ascx    # Popup skin
│   │   └── skin.doctype.xml  # DNN skin definition
│   └── patterns/             # Pattern library & sandbox (HTML prototypes)
│       ├── catalog/          # Living styleguide examples (e.g., hero.html)
│       └── sandbox/          # Misc. experiments (e.g., playground.html)
├── dist/ThemeSkin/           # Deployable package (copy of src/skin + built CSS)
├── docs/                     # Project notes and structure docs
└── package.json
```

## Patterns and includes

- `src/patterns/catalog/` — Examples to keep Tailwind JIT warm (add sections as you build UI).
- `src/patterns/pages/` — Pages that can include partials via `<!-- @include ../partials/navbar.html -->`.
- `src/patterns/partials/` — Reusable HTML fragments.
- Run `npm run patterns` (or `npm run patterns:watch`) to render into `public/pages/`, then serve `public/` (`npm run serve:patterns`) to preview.

## Deployment (summary)

1. Sync `src/skin/` to `dist/ThemeSkin/` (copy/rsync).
2. Run `npm run build` to produce `dist/ThemeSkin/css/skin.min.css`.
3. Copy `dist/ThemeSkin/` to your DNN Skins folder and clear cache.

For details and customization (fonts, colors, troubleshooting), see `docs/`.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test with `npm run dev`
5. Submit a pull request

## License

MIT License - see LICENSE file for details.

## Support

- **Documentation**: [Tailwind CSS v4 Docs](https://tailwindcss.com/docs), `docs/` in this repo
