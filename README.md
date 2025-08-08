# Finanz Portfolio - Demo Website

## ⚠️ WICHTIG: DEMO/VORSCHAU WEBSITE

**Dies ist eine Demo/Vorschau-Website für Präsentationszwecke. Alle Inhalte sind fiktiv und dienen ausschließlich der Demonstration von Design und Funktionalität.**

### Demo-Kennzeichnungen
- **Header Banner**: Deutliche Warnung als orangener Banner
- **Footer Disclaimer**: Ausführliche Erklärung im Footer
- **Fiktive Inhalte**: Alle Zahlen, Namen und Logos sind Beispiele
- **Keine Datenerfassung**: Formulare sind deaktiviert oder führen zu Dummy-Adressen

## 🚀 Projektübersicht

Eine moderne, responsive Finanzportfolio-Website erstellt mit **React**, **Next.js 15.4.6** und **TypeScript**. Das Design verwendet **Tailwind CSS** mit Glassmorphism-Effekten und **Framer Motion** für Animationen.

## ✨ Features

### Design & UI
- **Glassmorphism Design**: Moderne Transparenz-Effekte
- **Gradient-Designs**: Cyan-Blau-Indigo Farbschema
- **Responsive Layout**: Optimiert für alle Geräte
- **Smooth Animations**: Framer Motion Integration
- **Interactive Elements**: Hover-Effekte und Übergänge

### Seiten & Komponenten
- **Homepage**: Hero-Sektion, Services, Statistiken, Testimonials
- **Services**: Detaillierte Dienstleistungsübersicht
- **Portfolio**: Investment-Strategien
- **Über uns**: Team und Unternehmensinfo
- **Blog**: Artikel und News
- **Kontakt**: Kontaktformular und Informationen

### Technische Features
- **TypeScript**: Vollständige Typsicherheit
- **Next.js App Router**: Moderne Routing-Struktur
- **Tailwind CSS**: Utility-First Styling
- **Framer Motion**: Professionelle Animationen
- **Lucide React**: Moderne Icons
- **SEO Optimiert**: Meta-Tags und Struktur

## 🛠️ Technologie-Stack

- **Framework**: Next.js 15.4.6
- **Sprache**: TypeScript
- **Styling**: Tailwind CSS v3.4.17
- **Animationen**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite (via Next.js)
- **Package Manager**: npm

## 📦 Installation

```bash
# Repository klonen
git clone [repository-url]
cd finanz-portfolio

# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev
```

## 🚀 Verfügbare Scripts

```bash
# Entwicklungsserver
npm run dev

# Production Build
npm run build

# Production Server starten
npm start

# Linting
npm run lint
```

## 📁 Projektstruktur

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root Layout
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global Styles
│   ├── services/          # Services Page
│   ├── portfolio/         # Portfolio Page
│   ├── about/             # About Page
│   ├── blog/              # Blog Page
│   └── contact/           # Contact Page
├── components/            # React Components
│   ├── Navigation.tsx     # Header Navigation
│   ├── Footer.tsx         # Footer Component
│   ├── HeroSection.tsx    # Hero Section
│   ├── ServicesSection.tsx # Services Section
│   ├── StatsSection.tsx   # Statistics Section
│   ├── TestimonialsSection.tsx # Testimonials
│   └── CTASection.tsx     # Call-to-Action
└── types/                 # TypeScript Types
```

## 🎨 Design-System

### Farben
- **Primary**: Cyan-Blau Gradient (`from-cyan-400 to-blue-600`)
- **Secondary**: Indigo-Purple Gradient
- **Background**: Dark Slate (`from-slate-950 via-indigo-950 to-slate-950`)
- **Accent**: Gold/Amber für Highlights

### Komponenten
- **Glass Effect**: `backdrop-blur-md bg-white/[0.03]`
- **Gradient Text**: `bg-gradient-to-r from-cyan-400 to-blue-500`
- **Card Hover**: Smooth transitions mit Glow-Effekten
- **Button Styles**: Primary, Secondary, Outline Varianten

### Animationen
- **Entrance**: Fade-in mit Stagger-Effekten
- **Hover**: Scale und Glow-Effekte
- **Scroll**: Intersection Observer basiert
- **Custom**: Float, Pulse, Shimmer Animationen

## 📱 Responsive Design

- **Mobile First**: Optimiert für kleine Bildschirme
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Navigation**: Hamburger-Menü für Mobile
- **Grid System**: Flexbox und CSS Grid
- **Typography**: Responsive Schriftgrößen

## 🔧 Konfiguration

### Tailwind CSS
```typescript
// tailwind.config.ts
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { /* Custom Colors */ },
      animation: { /* Custom Animations */ },
      keyframes: { /* Custom Keyframes */ }
    }
  }
}
```

### PostCSS
```javascript
// postcss.config.mjs
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
}
```

## 🚀 Deployment

### Vercel (Empfohlen)
```bash
# Vercel CLI installieren
npm i -g vercel

# Deploy
vercel
```

### Andere Plattformen
- **Netlify**: `npm run build` → `out/` Ordner
- **GitHub Pages**: Statischer Export
- **Docker**: Multi-stage Build

## 📄 Lizenz

Dieses Projekt ist für Demo-Zwecke erstellt. Alle Inhalte sind fiktiv.

## 🤝 Beitragen

Da dies eine Demo-Website ist, werden keine echten Beiträge benötigt. Für Fragen oder Feedback kontaktieren Sie den Entwickler.

---

**⚠️ Erinnerung**: Dies ist eine Demo-Website. Alle Inhalte sind fiktiv und dienen nur Präsentationszwecken. 