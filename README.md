# tarunsirapurapu.space

Personal site and portfolio for Sai Tarun Sirapurapu — software engineer working
across machine learning and production full-stack systems.

**Live:** https://tarunsirapurapu.space

## Stack

React 19 on Vite 6, plain CSS with custom properties (no utility framework),
Three.js via Vanta for the animated hero sky, `lucide-react` for icons.
Deployed to GitHub Pages from `dist/` on a custom domain.

## Architecture notes

**A single token layer drives everything.** Every colour, shadow, radius and
easing curve lives in `src/styles/global.css` as a CSS custom property; no
component stylesheet hardcodes a colour. That's what made dark mode a ~40-line
diff rather than a rewrite — `:root[data-theme="dark"]` overrides the tokens and
nothing else changes. Brand hues are *re-picked* for dark rather than reused,
since the light-mode indigo and green are both illegible on a dark surface.

**Theme state is a single context.** `ThemeProvider` owns it; `ThemeToggle` and
`CloudSky` consume it. An inline script in `index.html` sets `data-theme` before
first paint so dark-mode visitors never get a white flash — that has to be
blocking and inline, since doing it in React is already too late. The site
follows the OS preference until the visitor picks a side, then persists theirs.

**Three.js is lazy-loaded.** At ~750 kB it outweighs everything else combined,
so `CloudSky` sits behind `React.lazy`. The initial bundle is ~71 kB gzipped and
the page is interactive before the WebGL sky arrives over a matching CSS
gradient placeholder.

**LeetCode stats are live.** `LeetCodeCard` fetches from a public API with
automatic failover to a second endpoint, and caches to `sessionStorage` so
repeat views render instantly rather than waiting on a cold start. Difficulty
bars are drawn as a share of problems actually solved, so bar width and printed
number always agree.

**Responsive by media query, not separate layouts.** One codebase; rules under
`820px` swap in a drop-down nav, shorten the hero band, and collapse the grids.
Hero heights use `dvh` so iOS Safari's collapsing toolbar doesn't leave a gap.

## Running locally

```bash
npm install
npm run dev      # vite dev server on :5173
npm run build    # production build to dist/
npm run deploy   # publish dist/ to GitHub Pages
```

## Layout

```
src/
  components/   Navbar, Footer, CloudSky, CloudCutout, StoryCard,
                ResumeButton, ThemeToggle, Tabs, LeetCodeCard, NeetCodeCard
  context/      ThemeContext — theme state and persistence
  pages/        Home, CareerPath, Projects, Skills, Dsa, Learning, Contact
  styles/       global.css holds the tokens; one stylesheet per section
```
