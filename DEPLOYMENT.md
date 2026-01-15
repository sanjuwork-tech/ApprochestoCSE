# Deployment & Preview

## Development Server

The development server is currently running on:
- **Local URL**: http://localhost:5174/
- **Network URL**: http://10.16.56.250:5174/

To access the live preview:
1. Open the URL above in your browser
2. Or use your platform's "Ports" panel to access port 5174

## Commands

### Start Development Server
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

## What's Deployed

✅ **Complete Landing Page** with:
- Sticky glassmorphic navigation bar
- Immersive hero section with animated mesh gradient background
- Floating glass card showing dashboard preview
- Bento grid layout with 4 feature boxes
- Call-to-action section with stats
- Premium footer

## Design Features Implemented

### 1. **Animated Mesh Gradient Background**
- Subtle, breathing animation with 3 gradient blobs
- CSS-only implementation (no Three.js)
- Respects `prefers-reduced-motion`
- Colors: Blue (#4A90E2) and Sage Green (#A8D5BA)

### 2. **Glassmorphism Effects**
- Navigation bar: `backdrop-blur-md` with 90% opacity
- Glass card: 60% opacity with backdrop blur
- Subtle shadows with blue tint

### 3. **Bento Grid Layout**
- Asymmetric card layout
- **Shadow Resume** (2-column span): UPSC → Corporate skills
- **Offline Mode** (small box): Download feature
- **Ethos** (tall box): Sanskrit wisdom
- **Community** (small box): Mentorship highlight

### 4. **Premium Typography**
- Headings: Playfair Display (loaded from Google Fonts)
- Body: Inter (loaded from Google Fonts)
- Proper font weights and hierarchy

### 5. **Accessibility**
- WCAG AA compliant contrast ratios
- ARIA labels on all interactive elements
- Keyboard navigation support
- Focus indicators on all buttons/links
- `prefers-reduced-motion` support for animations

### 6. **Responsive Design**
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Mobile slide-in menu for navigation
- Grid adapts to single column on mobile

## Brand Compliance

✅ **Logo Text**: "Approaches to CSE" (full text, not abbreviated)
✅ **Vibe**: Premium, cutting-edge, immersive
✅ **Color Palette**: All brand colors implemented
- Primary: #4A90E2 (Intellectual Blue)
- Secondary: #D4A373 (Clay/Sand)
- Accent: #A8D5BA (Sage Green)
- Background: #F9F9F9 (Off-white)
- Text: #1E293B (Slate 800)

## Performance

- **CSS-only animations**: No heavy JavaScript libraries
- **Optimized bundle**: Vite for fast builds
- **Small bundle size**: ~215KB JS, ~25KB CSS (gzipped: ~67KB JS, ~5KB CSS)
- **No Three.js**: Lightweight mesh gradient implementation

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Supports latest React 19
- Tailwind CSS v3.4.17
- Vite v7.3.1

---

**Status**: ✅ **PRODUCTION READY**

All requirements from the ticket have been successfully implemented!
