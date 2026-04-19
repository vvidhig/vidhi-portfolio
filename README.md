# Vidhi Gupta — Portfolio

A modern, dark-luxury portfolio website built with **React**, **TypeScript**, and **Tailwind CSS**.

## 🎨 Design System
- **Color Palette**: Champagne Beige `#F2E5C6` · Sand Gold `#F2D9A0` · Burgundy `#75162D` · Dark Maroon `#560B18` · Deep Wine `#3B010B`
- **Typography**: Playfair Display (headings) · Cormorant Garamond (body) · DM Mono (labels/code)
- **Style**: Dark luxury · editorial cards · bento grid layout · scroll-reveal animations

## 🗂️ Structure

```
src/
├── components/
│   └── Nav.tsx              # Sticky navigation
├── sections/
│   ├── HeroSection.tsx      # About / Hero
│   ├── ExperienceSection.tsx # Work experience with metrics
│   ├── ProjectsSection.tsx  # Bento-grid project cards
│   ├── SkillsSection.tsx    # Skill groups + certifications
│   ├── EducationSection.tsx # Education timeline cards
│   └── HobbiesSection.tsx  # Hobby cards + footer
├── hooks/
│   └── useInView.ts         # Intersection Observer hook
├── App.tsx
├── index.tsx
└── index.css                # Global styles + animations
```

## 🚀 Running Locally

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## 🌐 Deploying to Vercel

### Option 1 — Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2 — GitHub Integration
1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and click **New Project**
3. Import your GitHub repo
4. Vercel auto-detects Create React App — click **Deploy**

That's it! Your site goes live on a `.vercel.app` URL instantly.

## ✏️ Customizing

- **Links**: Update LinkedIn, GitHub, LeetCode `href` values in `Nav.tsx` and `HeroSection.tsx`
- **Content**: All data is co-located in each section file as a typed array — easy to edit
- **Colors**: All palette values are in `tailwind.config.js` and `index.css` CSS variables
- **Fonts**: Loaded via Google Fonts in `public/index.html`
