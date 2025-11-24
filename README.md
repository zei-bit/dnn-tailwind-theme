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

## Living Styleguide

The `src/patterns/` folder contains sample components that help Tailwind's JIT compiler recognize all your classes. Keep this updated with finished sections:

- `catalog/hero.html` - Hero sections and banners
- Add more catalog pages as you build new UI sections (forms, navigation, etc.)

### Pattern builder (includes)

- Author pages in `src/patterns/pages/` and partials in `src/patterns/partials/`.
- Use include markers in pages: `<!-- @include ../partials/navbar.html -->`.
- Run `npm run patterns` to write composed HTML to `public/pages/`, then serve `public/` with your static server (e.g., Five Server). A starter demo is provided at `public/pages/example.html`.

## Deployment

1. **Sync skin assets to dist**:
   ```bash
   rsync -av src/skin/ dist/ThemeSkin/ --delete
   ```
2. **Build production CSS into dist**:
   ```bash
   npm run build
   ```
3. **Copy `dist/ThemeSkin/`** to your DNN installation (e.g., `/Portals/_default/Skins/YourThemeName/`)
4. **Clear DNN cache** (Admin → Host → Clear Cache)
5. **Apply the theme** in Site Settings

## Troubleshooting

### File Watching Issues
If you're developing over SMB/NAS and file watching is unreliable:
```bash
npm run dev:poll
```

### Missing Classes
If Tailwind purges classes you're using:
1. Add them to `src/patterns/catalog/` files
2. Use the `@source inline()` directive in `src/skin/css/tailwind.css`
3. Check that your files are included in the `@source` patterns

### Build Errors
- Ensure Node.js LTS is installed
- Run `npm ci` to install exact dependency versions
- Check that `postcss.config.js` is present

## Customization

### Colors and Theme
Modify the theme tokens in `css/tailwind.css`:

```css
@theme {
  --color-primary: #dc2626; /* red-600 */
  --color-secondary: #059669; /* emerald-600 */
}
```

### Fonts
Update the `@font-face` declarations in `css/tailwind.css` and modify the font family in your components.

### Responsive Breakpoints
Tailwind's default breakpoints work well, but you can customize them in the CSS configuration.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test with `npm run dev`
5. Submit a pull request

## License

MIT License - see LICENSE file for details.

## Support

- **Issues**: GitHub Issues
- **Documentation**: [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- **DNN**: [DotNetNuke Documentation](https://www.dnnsoftware.com/docs)
