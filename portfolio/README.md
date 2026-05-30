# Alex Rahman — Personal Portfolio

A clean, responsive personal portfolio website built with **pure HTML, CSS, and JavaScript** — no frameworks, no dependencies.

## 🌐 Live Demo

[View live →](https://alexrahman.github.io/portfolio)

## ✨ Features

- **Responsive design** — mobile-first layout that works on all screen sizes
- **Sticky navbar** — with scroll-triggered border and active link highlighting
- **Mobile menu** — hamburger toggle for small screens
- **Scroll reveal animations** — elements animate in as you scroll (IntersectionObserver)
- **Animated counters** — numbers count up when they enter the viewport
- **Animated skill bars** — fill in smoothly on scroll
- **Project filtering** — filter cards by category without page reload
- **Form validation** — client-side validation with helpful error messages
- **Smooth scrolling** — via CSS `scroll-behavior: smooth`

## 📁 Project structure

```
portfolio/
├── index.html        # Main HTML file
├── css/
│   └── style.css     # All styles with CSS custom properties
├── js/
│   └── main.js       # All JavaScript interactions
└── README.md
```

## 🛠️ Technologies used

| Technology | Usage |
|---|---|
| HTML5 | Semantic structure, accessibility |
| CSS3 | Custom properties, Flexbox, Grid, animations |
| JavaScript (ES6+) | IntersectionObserver, DOM manipulation, form validation |
| Google Fonts | DM Serif Display + DM Sans |

## 🚀 Getting started

No build tools needed. Just clone and open:

```bash
git clone https://github.com/alexrahman/portfolio.git
cd portfolio
# Open index.html in your browser, or use Live Server in VS Code
```

## 📐 JavaScript features explained

### IntersectionObserver
Used for three things:
1. **Scroll reveal** — adds `.visible` class when elements enter viewport
2. **Counter animation** — triggers number count-up once the stat cards are visible
3. **Skill bars** — animates width fill when skills section is visible

### Form validation
Pure JS validation before submission — checks for empty fields, email format, and minimum message length.

### Project filter
Toggles a `.hidden` CSS class based on `data-category` attributes on each card.

## 📱 Responsive breakpoints

| Breakpoint | Layout change |
|---|---|
| > 900px | Two-column hero and about sections |
| ≤ 900px | Single column, hero visual hidden |
| ≤ 640px | Mobile nav toggle, single column projects |

## 🎨 Customisation

All colors are in CSS custom properties at the top of `style.css`:

```css
:root {
  --clr-dark: #0f0f0f;
  --clr-light: #fafaf8;
  --clr-accent: #d4541e;   /* Change this to your accent color */
  --clr-surface: #f4f3ef;
}
```

---

Built with ❤️ by Alex Rahman
