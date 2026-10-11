# My Personal Portfolio

**Live Site:** https://aishabaimukan2006.github.io/iwamad-sis1-portfolio/

This is a responsive, single-page personal portfolio showcasing my projects in frontend development, data analytics, and UI/UX design. It features a dark/light mode toggle and a fully validated contact form. The site is built entirely with semantic HTML5, CSS3 variables, and vanilla JavaScript.

**Design Decisions:**
1. **CSS Variables (Tokens):** I used CSS variables for all colors and spacing to ensure a consistent design system that easily swaps palettes for the dark theme.
2. **Mobile-First Layout:** I designed the header and project sections as single columns by default, applying a CSS Grid media query (`@media (min-width: 768px)`) to expand into three columns on larger screens.
3. **Custom Validation:** I used HTML5 `novalidate` on the form to disable default browser popups, allowing me to render custom error text directly below the submit button for better UX.