# Approaches to CSE - Landing Page

A cutting-edge, immersive landing page built with modern SaaS/EdTech aesthetics featuring glassmorphism, mesh gradients, and bento grid layouts.

## 🚀 Tech Stack

- **React** (via Vite) - Lightweight, fast build tool
- **Tailwind CSS v3** - Utility-first CSS with gradient support
- **Lucide React** - Modern icon library (stroke-width: 1.5)
- **Google Fonts** - Playfair Display + Inter

## 🎨 Design Features

### Glassmorphism
- Frosted glass effects with backdrop filters
- Subtle transparency and blur effects
- Premium aesthetic throughout

### Animated Mesh Gradient Background
- Subtle, breathing background animation
- CSS-only implementation (no heavy libraries)
- Three morphing gradient blobs
- Respects `prefers-reduced-motion`

### Bento Grid Layout
- Asymmetric, modern card layout
- Four feature boxes with different sizes
- Fully responsive design

### Premium Typography
- **Headings**: Playfair Display (serif, elegant)
- **Body**: Inter (sans-serif, readable)

## 🎯 Color Palette

- **Primary Blue**: `#4A90E2` (Intellectual)
- **Clay/Sand**: `#D4A373` (Earth tones)
- **Sage Green**: `#A8D5BA` (Growth)
- **Background**: `#F9F9F9` (Off-white)
- **Text**: `#1E293B` (Slate 800)

## 📦 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx                 # Sticky navigation with glassmorphism
│   ├── HeroSection.jsx            # Main hero section
│   ├── BentoGridSection.jsx       # Feature grid
│   ├── CallToActionSection.jsx    # CTA with stats
│   ├── Footer.jsx                 # Footer with links
│   ├── DiyaIcon.jsx               # Custom SVG icon
│   ├── hero/
│   │   ├── MeshGradientBackground.jsx
│   │   ├── HeroContent.jsx
│   │   └── GlassCard.jsx          # Floating dashboard card
│   └── bento/
│       ├── ShadowResumeBox.jsx
│       ├── OfflineModeBox.jsx
│       ├── EthosBox.jsx
│       └── CommunityBox.jsx
├── App.jsx                        # Main app component
├── main.jsx                       # Entry point
└── index.css                      # Global styles + animations
```

## 🏃 Getting Started

### Install Dependencies
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## ♿ Accessibility

- WCAG AA compliant (4.5:1 contrast ratios)
- Keyboard navigation support
- Screen reader friendly with ARIA labels
- Focus indicators on all interactive elements
- Respects `prefers-reduced-motion` for animations

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Optimized for iPhone, iPad, and desktop
- Smooth slide-in mobile menu

## ⚡ Performance

- CSS-only animations (no heavy JS libraries)
- Optimized SVG assets
- Lazy-loading ready
- Small bundle size with Vite
- No Three.js or canvas dependencies

## 🎭 Key Components

### Hero Section
- 40/60 asymmetric layout
- Animated mesh gradient background
- Floating glass card with dashboard preview
- Dual CTA buttons

### Bento Grid
- **Shadow Resume**: UPSC skills → corporate skills
- **Offline Mode**: Download & learn anywhere
- **Ethos**: Sanskrit wisdom with translation
- **Community**: Dignified mentorship highlight

### Navigation
- Sticky glassmorphic navbar
- Smooth underline animation on hover
- Premium mobile slide-in menu
- Keyboard accessible

## 📝 Brand Requirements

- **Logo**: "Approaches to CSE" (full text, never abbreviated)
- **Vibe**: Premium, cutting-edge, immersive
- **No**: Flat design, toxic branding, clutter

---

**© 2025 Approaches to CSE. Made with ❤️ for India.**
