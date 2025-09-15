# DNN Tailwind Theme

A modern, responsive DotNetNuke theme built with **Tailwind CSS v4** and designed for seamless integration with 2sxc content management.

## Features

- 🎨 **Tailwind CSS v4** with CSS-first configuration
- 🚫 **No Preflight** - preserves existing DNN styles
- 🏷️ **Namespaced Utilities** - all classes prefixed with `tw:`
- 🔧 **Server-Agnostic** - works on any DNN installation
- 📦 **Template-Ready** - GitHub starter template

## Prerequisites

- **Node.js** LTS (v18 or higher)
- **npm** (comes with Node.js)
- **DotNetNuke** installation
- **2sxc** module (optional, for content management)

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
4. **Copy the skin folder** to your DNN installation
5. **Apply the theme** in DNN Admin → Site Settings → Appearance

## Development Workflow

### Available Scripts

- `npm run dev` - Start development with file watching
- `npm run dev:poll` - Use polling for SMB/NAS file systems
- `npm run build` - Build production CSS

### CSS-First Configuration

This theme uses Tailwind v4's CSS-first approach. Configuration is in `css/tailwind.css`:

```css
/* Import Tailwind with namespace prefix */
@import "tailwindcss/theme.css" layer(theme) prefix(tw);
@import "tailwindcss/utilities.css" layer(utilities) prefix(tw);

/* Tell Tailwind where to scan for classes */
@source "./";
@source "./**/*.{ascx,aspx,cshtml,razor,html,js}";
@source "./dev/catalog/**/*.{html,cshtml}";
```

### Using Tailwind Classes

All utility classes are prefixed with `tw:`:

```html
<div class="tw:flex tw:items-center tw:justify-between">
  <h1 class="tw:text-2xl tw:font-bold">Welcome</h1>
  <button class="btn-primary">Get Started</button>
</div>
```

**Hover states** work directly in HTML:
```html
<button class="hover:tw:bg-red-800">Hover me</button>
```

### Custom Components

Define reusable components in `css/tailwind.css`:

```css
@layer components {
  /* Add your custom components here */
  .btn-primary {
    @apply tw:inline-flex tw:items-center tw:rounded-xl tw:bg-red-700 tw:text-white tw:px-5 tw:py-3;
  }
  .btn-primary:hover {
    @apply tw:bg-red-800;
  }
}
```

**Note:** For hover states in `@apply`, use separate CSS selectors (not inline `hover:tw:bg-red-800`).

### Typography Plugin Limitation

**Important:** The `@tailwindcss/typography` plugin is not compatible with Tailwind CSS v4 at this time. If you need typography styling, use individual Tailwind classes or create custom components.

For rich text content, you can create custom components using `@apply`:

```css
@layer components {
  .content-prose {
    @apply tw:max-w-none tw:text-gray-700;
  }
  .content-prose h1 {
    @apply tw:font-ubuntu tw:text-4xl tw:font-bold tw:text-gray-900 tw:mb-6 tw:mt-8;
  }
  .content-prose p {
    @apply tw:mb-4 tw:leading-relaxed;
  }
}
```

## File Structure

```
├── css/
│   ├── tailwind.css          # Source CSS with Tailwind v4 config
│   └── skin.min.css          # Compiled output (gitignored)
├── js/
│   └── skin.min.js           # Optional JavaScript bundle
├── partials/
│   ├── _includes.ascx        # CSS/JS includes
│   ├── _registers.ascx       # DNN control registrations
│   ├── _header.ascx          # Header partial
│   └── _footer.ascx           # Footer partial
├── dev/
│   └── catalog/              # Living styleguide
│       └── hero.html          # Sample components
├── menus/                     # Menu templates
├── fonts/                     # Self-hosted fonts
├── images/                    # Theme images
├── default.ascx              # Main skin file
├── popUpSkin.ascx            # Popup skin
└── skin.doctype.xml          # DNN skin definition
```

## Living Styleguide

The `dev/catalog/` folder contains sample components that help Tailwind's JIT compiler recognize all your classes. Keep this updated with finished sections:

- `hero.html` - Hero sections and banners
- `features.html` - Feature grids and cards
- `navigation.html` - Menu and navigation patterns
- `forms.html` - Form layouts and inputs

## Deployment

1. **Build production CSS**:
   ```bash
   npm run build
   ```
2. **Copy the entire skin folder** to your DNN installation
3. **Clear DNN cache** (Admin → Host → Clear Cache)
4. **Apply the theme** in Site Settings

## Troubleshooting

### File Watching Issues
If you're developing over SMB/NAS and file watching is unreliable:
```bash
npm run dev:poll
```

### Missing Classes
If Tailwind purges classes you're using:
1. Add them to `dev/catalog/` files
2. Use the `@source inline()` directive in `css/tailwind.css`
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
- **2sxc**: [2sxc Documentation](https://docs.2sxc.org/)