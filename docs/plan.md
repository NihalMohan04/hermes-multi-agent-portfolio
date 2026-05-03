# Portfolio Website Build Plan

## Design Direction
- Modern, clean single-page portfolio
- Dark theme with accent colors (cyan/teal on dark slate background)
- Glassmorphism cards, subtle gradients
- Smooth scroll-triggered animations
- Fully responsive (mobile-first)
- **User preference**: Clean animations (60fps, CSS-first where possible), faster UI (minimal JS reflows), aesthetic designs (polished, not cluttered)
- Performance budget: No layout thrashing, prefer `transform` and `opacity` for animations

## File Structure
```
/
├── index.html
├── css/
│   ├── base.css       (reset, variables, typography)
│   ├── layout.css     (grid, sections, container)
│   ├── components.css (buttons, cards, nav, forms)
│   └── animations.css (keyframes, transitions)
├── js/
│   ├── main.js        (nav, scroll, theme toggle)
│   └── animations.js  (intersection observer, typed effect)
└── assets/
    └── images/        (placeholders for projects)
```

## HTML Sections (class names are CONTRACT — all agents must use exactly)
1. `<header class="header">` — fixed nav, logo left, links right, hamburger mobile
2. `<section id="hero" class="hero">` — big name, tagline, CTA button, subtle animated gradient bg
3. `<section id="about" class="about">` — bio text + skills grid
4. `<section id="projects" class="projects">` — project cards grid (3 cols desktop, 1 mobile)
5. `<section id="skills" class="skills">` — skill bars / icons grid
6. `<section id="contact" class="contact">` — simple form + social links
7. `<footer class="footer">` — copyright + back-to-top

## CSS Variable Contract (must exist in base.css)
```css
:root {
  --bg-primary: #0f172a;
  --bg-secondary: #1e293b;
  --text-primary: #f8fafc;
  --text-secondary: #94a3b8;
  --accent: #06b6d4;
  --accent-hover: #22d3ee;
  --card-bg: rgba(30, 41, 59, 0.7);
  --border: rgba(148, 163, 184, 0.1);
  --radius: 12px;
  --transition: 0.3s ease;
}
```

## Component Classes
- `.btn` — primary button (accent bg, rounded)
- `.btn-secondary` — outline button
- `.card` — glassmorphism card (bg + blur + border)
- `.section-title` — h2 with underline accent
- `.nav__link` — nav anchor
- `.hamburger` — mobile menu toggle (3 spans)
- `.skill-bar` — animated progress bar
- `.project-card` — image + title + description + tags

## JavaScript Requirements
- Mobile nav toggle (hamburger)
- Smooth scroll for anchor links
- Intersection Observer for fade-in animations (`.fade-in`, `.slide-up`)
- Optional: typewriter effect in hero subtitle
- Active nav link highlighting on scroll

## Content
- Name: "Alex Morgan" (placeholder)
- Tagline: "Full-Stack Developer & UI Designer"
- Bio: 2-3 sentences about passion for building things
- Projects: 3 cards with titles "E-Commerce Platform", "Task Manager App", "AI Dashboard"
- Skills: HTML, CSS, JavaScript, React, Node.js, Python, UI/UX, Git
- Contact: email form (name, email, message) + GitHub, LinkedIn, Twitter links

## Tasks
1. **STRUCTURE** — Create index.html with all sections, semantic markup, and class names per contract above.
2. **STYLES** — Create css/base.css, css/layout.css, css/components.css, css/animations.css per contract. Must be fully responsive.
3. **INTERACTIVITY** — Create js/main.js and js/animations.js per contract.
4. **CONTENT** — Populate index.html with all placeholder content. Ensure accessibility (alt text, labels, ARIA where needed).
5. **POLISH** — Cross-browser check, performance (no layout thrashing), accessibility audit (contrast, focus states), SEO meta tags.
6. **VERIFY** — Open in browser, screenshot, check console for errors, test responsive breakpoints.
