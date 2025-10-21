# Portfolio Showcase Website

A modern, dark-themed portfolio website built with Next.js 14, inspired by contemporary design patterns from sites like Graphite.dev.

## Features

### Design System
- **Dark-First Theme**: Beautiful dark color scheme with purple/blue accent gradients
- **Custom Utilities**: Pre-built classes for glow effects, glass morphism, and edge lighting
- **Accessibility**: WCAG 2.1 AA compliant with focus states and reduced motion support
- **Responsive**: Mobile-first design that works seamlessly across all devices

### Components

1. **Header & Navigation**
   - Fixed glass-effect header
   - Mobile-friendly hamburger menu with smooth animations
   - Keyboard-accessible navigation

2. **Hero Section**
   - Eye-catching hero with dual CTAs
   - Framer Motion animations with stagger effects
   - Gradient background with glow effects

3. **Feature Grid**
   - 6 feature cards showcasing skills and values
   - Hover effects with subtle scale and glow
   - Icon integration with smooth transitions

4. **Stacking Feature**
   - Terminal/code mockup with glowing effects
   - Two-column layout (media + text)
   - Interactive hover states

5. **Feature Showcase**
   - Interactive Media + Selector Rail component
   - Keyboard navigation (Arrow keys + Enter/Space)
   - Smooth crossfade transitions between features
   - ARIA-compliant tablist implementation

6. **Project Grid**
   - Pills filter for categorizing projects (All/Personal/Business/Open Source)
   - Project cards with images, tags, and descriptions
   - Featured badge with gradient styling
   - Hover animations and transitions

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Fonts**: Geist Sans & Geist Mono

## Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The site will be available at `http://localhost:3000`

## Project Structure

```
showcase-site/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Home page combining all sections
│   └── globals.css         # Global styles and theme system
├── components/
│   ├── Header.tsx          # Main navigation header
│   ├── MobileMenu.tsx      # Mobile navigation drawer
│   ├── Hero.tsx            # Hero section with CTAs
│   ├── FeatureGrid.tsx     # Skills/features grid
│   ├── StackingFeature.tsx # Terminal mockup section
│   ├── FeatureShowcase.tsx # Interactive media showcase
│   ├── ProjectCard.tsx     # Individual project card
│   └── ProjectGrid.tsx     # Projects grid with filter
└── public/                 # Static assets
```

## Customization

### Theme Colors

Edit `app/globals.css` to customize the color scheme:

```css
:root {
  --bg: #0a0a0a;              /* Background */
  --surface: #141414;          /* Card backgrounds */
  --accent: #8b5cf6;           /* Primary accent (purple) */
  --accent-alt: #6366f1;       /* Secondary accent (blue) */
  --text: #ededed;             /* Primary text */
  --text-muted: #a3a3a3;       /* Muted text */
}
```

### Content

1. **Projects**: Edit sample data in `components/ProjectGrid.tsx`
2. **Features**: Update feature list in `components/FeatureGrid.tsx`
3. **Hero**: Customize text in `components/Hero.tsx`
4. **Navigation**: Modify links in `components/Header.tsx`

## Key Design Patterns

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

### Edge Light (Rim Gradient)
```tsx
<div className="edge-light rounded-2xl">
  {/* Subtle rim highlight */}
</div>
```

### Badge Gradient
```tsx
<span className="badge-gradient rounded-full">
  Featured
</span>
```

## Performance

- **Optimized Images**: Use next/image for automatic optimization
- **Tree-shaking**: Framer Motion imports are tree-shakeable
- **Code Splitting**: Automatic route-based code splitting
- **CSS-in-JS**: Tailwind for zero-runtime CSS

## Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus visible states
- Reduced motion support
- Color contrast compliance (WCAG AA)

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Next Steps

### Add More Pages
Create additional routes:
- `/projects` - Full projects listing
- `/about` - About page with bio
- `/contact` - Contact form
- `/blog` - Blog with MDX

### Integrate CMS
- Use Contentlayer for MDX content
- Add frontmatter for project metadata
- Create dynamic routes for projects

### Enhance Features
- Add dark/light mode toggle
- Implement search functionality
- Add blog with MDX support
- Connect contact form to email service

### Deploy
```bash
# Deploy to Vercel (recommended)
npm install -g vercel
vercel

# Or use other platforms:
# - Netlify
# - Railway
# - AWS Amplify
```

## License

MIT License - feel free to use this for your own projects!

## Credits

Design inspiration from modern portfolio sites and the Graphite.dev aesthetic.
Built with Next.js, Tailwind CSS, and Framer Motion.
