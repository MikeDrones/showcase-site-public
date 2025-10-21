# Portfolio Showcase

A modern, minimalist portfolio website built with Next.js 15, featuring a black and white theme, glass morphism effects, and smooth animations.

## Features

- **Modern Design**: Clean black & white aesthetic with subtle glass effects
- **Responsive**: Mobile-first design that works on all devices
- **Animations**: Smooth transitions and interactions powered by Framer Motion
- **Accessible**: WCAG 2.1 AA compliant with keyboard navigation
- **Performance**: Optimized with Next.js 15 and Turbopack
- **TypeScript**: Fully typed for better development experience

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Fonts**: Geist Sans & Geist Mono

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio-showcase.git
cd portfolio-showcase

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
showcase-site-public/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles & theme
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── MobileMenu.tsx      # Mobile navigation
│   ├── Hero.tsx            # Hero section
│   ├── FeatureGrid.tsx     # Skills grid
│   ├── StackingFeature.tsx # Terminal showcase
│   ├── FeatureShowcase.tsx # Interactive media panel
│   ├── ProjectCard.tsx     # Project card component
│   └── ProjectGrid.tsx     # Projects grid with filter
└── public/                 # Static assets
```

## Customization

### Update Your Information

1. **Projects** - Edit `components/ProjectGrid.tsx`
2. **Hero Text** - Modify `components/Hero.tsx`
3. **Features** - Update `components/FeatureGrid.tsx`
4. **Logo** - Replace `public/logo.png`
5. **Metadata** - Edit `app/layout.tsx`

### Theme Colors

Customize the color scheme in `app/globals.css`:

```css
:root {
  --bg: #000000;           /* Background */
  --surface: #0a0a0a;      /* Surface layers */
  --text: #ffffff;         /* Text color */
  --accent: #ffffff;       /* Accent color */
  /* ... */
}
```

## Design Patterns

### Glass Morphism
```tsx
<div className="glass glass-hover rounded-2xl p-6">
  {/* Content */}
</div>
```

### Glow Effects
```tsx
<div className="shadow-glow-hover">
  {/* Glows on hover */}
</div>
```

### Edge Light
```tsx
<div className="edge-light rounded-2xl">
  {/* Subtle rim highlight */}
</div>
```

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

- **Netlify**: Connect your GitHub repo
- **Railway**: Deploy from GitHub
- **AWS Amplify**: Use the Amplify Console

## Performance

- Automatic image optimization with `next/image`
- Code splitting and lazy loading
- Optimized fonts with `next/font`
- Tree-shaking for minimal bundle size

## Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus visible states
- Reduced motion support
- WCAG AA color contrast

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

MIT License - feel free to use this for your own portfolio!

## Credits

Built with Next.js, Tailwind CSS, and Framer Motion.
