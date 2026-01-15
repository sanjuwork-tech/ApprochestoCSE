# Approaches to CSE - Landing Page

A responsive, high-performance landing page for "Approaches to CSE" - India's first adaptive platform that secures your career while you prepare for UPSC.

## 🚀 Tech Stack

- **React 18** with Vite for blazing-fast development
- **Tailwind CSS** for utility-first styling
- **Lucide React** for beautiful, lightweight icons
- **Google Fonts** (Merriweather & Inter) for typography

## 🎨 Design System

### Color Palette
- Primary Brand: `#4A90E2` (Intellectual Blue)
- Secondary Earth: `#D4A373` (Clay/Sand)
- Accent Growth: `#A8D5BA` (Sage Green)
- Background: `#F9F9F9` (Off-white/Paper)
- Text: `#1E293B` (Slate 800)

### Typography
- **Headings**: Merriweather (Serif, Weight 700)
- **Body**: Inter (Sans-serif, Weight 400/500)
- **Style**: Neomorphism Lite with soft shadows and rounded corners

## 📦 Features

### Components
1. **Sticky Navigation Bar** - Responsive with mobile hamburger menu
2. **Hero Section** - Two-column layout with isometric illustration
3. **Shadow Resume Section** - Interactive 3D flip cards showing UPSC→Corporate skill translation
4. **Ethos Section** - Sanskrit wisdom with elegant typography
5. **Features Grid** - Highlighting Offline-First, Adaptive AI, and Community features
6. **Footer** - Links and Telegram integration

### Technical Highlights
- ✅ WCAG AA compliant (contrast ratio 4.5:1+)
- ✅ Mobile-first responsive design
- ✅ Lightweight bundle (~51KB gzipped JS)
- ✅ CSS-only animations (no heavy libraries)
- ✅ Optimized for low-bandwidth connections
- ✅ Server-renderable components

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx              # Sticky navigation with mobile menu
│   ├── HeroSection.jsx         # Hero with dual-path illustration
│   ├── ShadowResumeSection.jsx # 3D flip cards
│   ├── EthosSection.jsx        # Sanskrit verse section
│   ├── FeaturesGrid.jsx        # Feature cards
│   └── Footer.jsx              # Footer with links
├── App.jsx                     # Main layout
├── main.jsx                    # Entry point
└── index.css                   # Global styles + Tailwind
```

## 🎯 Key Features

### Interactive Flip Cards
Hover over cards in the Shadow Resume section to see UPSC skills transform into corporate competencies:
- Ethics Paper → Corporate Decision Making
- Answer Writing → Content Strategy
- Interview Prep → Business Communication

### Responsive Design
- **Mobile**: Stacked layouts, hamburger menu
- **Tablet**: Optimized middle ground
- **Desktop**: Full grid layouts with hover effects

### Performance Optimizations
- Lightweight SVG illustrations
- CSS transitions only (no JS animation libraries)
- Optimized bundle size
- Lazy loading ready

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

© 2025 Approaches to CSE. Made with ❤️ for India

## 🤝 Contributing

This is a proprietary project for Approaches to CSE. For inquiries, please contact the team.
