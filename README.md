# ramdhan-np

Personal portfolio website of **Ramdhan Nugraha Pratama** — a software developer
focused on the JavaScript ecosystem. It is a static single-page app with no
backend: all content is defined as arrays inside the React components.

Live demo: <https://ramdhannp.github.io/ramdhan-np/>

## Sections

The page is a single scroll with anchor navigation, composed in `src/App.jsx`:

| Component                 | Content                                                               |
| ------------------------- | --------------------------------------------------------------------- |
| `Header` / `Navbar`       | Fixed header with logo and a hamburger menu on mobile                 |
| `Hero`                    | Multilingual greeting (typewriter), "Available for work" badge, avatar |
| `About`                   | Short self-description and a stats card                               |
| `Skill` / `SkillCard`     | Skill grid: CSS, JavaScript, Next.js, React, TypeScript, Node.js, …   |
| `Work` / `ProjectCard`    | Highlighted projects with tags and external links                     |
| `Contact`                 | Contact information                                                   |
| `Footer`                  | Closing links                                                         |

## Tech stack

- **React 18** + **Vite 8**
- **Tailwind CSS 4** with `tailwind-scrollbar` (utility classes in JSX, theme and
  plugin configured in `src/index.css`; there is no `tailwind.config.js`)
- **GSAP** + `ScrollTrigger` (`@gsap/react`) — scroll-reveal animation for
  elements with the `reveal-up` class
- **Lenis** (`lenis/react`) — smooth scrolling wrapper in `App.jsx`
- **typewriter-effect** — animated greeting in the hero section
- **ESLint 9** for linting

Fonts (Inter, Cinzel Decorative, Playfair Display, Engagement) and Material
Symbols Rounded icons are loaded from Google Fonts in `index.html`.

## Getting started

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

The dev server is pinned to `http://127.0.0.1:5173`.

### Scripts

| Command           | Description                                 |
| ----------------- | ------------------------------------------- |
| `npm run dev`     | Start the Vite dev server (127.0.0.1:5173)   |
| `npm run build`   | Production build to `dist/`                 |
| `npm run preview` | Serve the production build (127.0.0.1:4173) |
| `npm run lint`    | Run ESLint                                  |
| `npm run deploy`  | Build and publish `dist/` via `gh-pages`    |

## Project structure

```text
.
├── index.html              # HTML shell, fonts, favicon, scrollbar classes
├── public/images/          # avatars, logos, skill icons, project screenshots
├── src
│   ├── main.jsx            # React entry point
│   ├── App.jsx             # Lenis root, GSAP scroll-reveal, page sections
│   ├── index.css           # Tailwind import, theme, custom classes
│   └── components/         # Header, Hero, About, Skill, Work, Contact, Footer…
├── postcss.config.js       # @tailwindcss/postcss
├── vite.config.js
└── Dockerfile              # Build stage + artifact-only Alpine stage
```

## Content editing

- **Projects** — edit the `works` array in `src/components/Work.jsx`.
- **Skills** — edit the `skillItem` array in `src/components/Skill.jsx`.
- **Contact links** — edit `src/components/Contact.jsx`.
- **About text / stats** — edit `src/components/About.jsx`.
- **Assets** — place files in `public/images/` and reference them with
  root-relative paths such as `/images/react.svg`.

## Deployment

Two deployment paths exist:

1. **GitHub Actions** — pushing to `main` triggers
   `.github/workflows/deploy.yml`, which builds the project and publishes
   `dist/` to GitHub Pages with `peaceiris/actions-gh-pages`.
2. **Manual** — `npm run deploy` (uses the `gh-pages` package and the
   `homepage` field in `package.json`).

GitHub Pages serves this project from `/ramdhan-np/`, so the build needs
`base: "/ramdhan-np/"`. Instead of hardcoding it, `vite.config.js` reads the
`BASE_PATH` environment variable and defaults to `/`:

- CI sets `BASE_PATH=/ramdhan-np/` for the build step.
- `npm run deploy` does the same through the `predeploy` script.
- `npm run dev` and `npm run preview` keep `/`, so local URLs stay at the root.

## License

See [LICENSE](./LICENSE).
