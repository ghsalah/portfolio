<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
=======
# ghsalah — Portfolio

Personal portfolio website for ghsalah. This repository contains the source code and assets for a personal site showcasing projects, blog posts, skills, and contact information.

> NOTE: This README is a customizable template. Replace placeholders (marked in <angle brackets>) with your project's actual information.

## Contents

- About — brief introduction and goals for the portfolio
- Projects — showcased projects with links and short descriptions
- Tech Stack — libraries, frameworks, and tools used
- Local development — how to run the project locally
- Deployment — notes for deploying the site
- Contributing — guidelines for updates and contributions
- License and Contact — repo license and ways to reach the owner

## Demo

Live demo: <replace-with-live-demo-url>

Screenshot:

![Screenshot](./screenshot.png)

## Features

- Clean, responsive design
- Project listings with details and links
- Blog / writing section (optional)
- Contact form or contact links
- SEO-friendly meta and structured data (optional)

## Built with

Replace the list below with the actual stack used in this repo:

- HTML5
- CSS3 / SCSS / Tailwind CSS
- JavaScript / TypeScript
- React / Next.js / Gatsby (if applicable)
- Vercel / Netlify / GitHub Pages (for deployment)

## Getting started (local development)

These are example instructions — adapt them to your project's real commands and dependencies.

1. Clone the repo

   git clone https://github.com/ghsalah/portfolio.git
   cd portfolio

2. Install dependencies (choose one)

   npm install
   # or
   yarn install
   # or
   pnpm install

3. Start the dev server

   npm run dev
   # or
   yarn dev
   # or
   pnpm dev

4. Open http://localhost:3000 (or the port your project uses)

## Build

To create a production build:

   npm run build
   # or
   yarn build
   # or
   pnpm build

## Deployment

Common deployment options:

- Vercel: connect the repo and deploy from the main branch
- Netlify: connect the repo and set the build command and publish directory
- GitHub Pages: build static files then publish from the gh-pages branch or from the docs folder

Add any specific environment variables, build steps, or redirects the site needs here.

## Project structure (example)

Describe the top-level folders and files in this repo. Update to match your repository layout.

- public/         — static assets
- src/            — source code (components, pages, styles)
- package.json    — scripts and dependencies
- README.md       — this file

## Contributing

Contributions are welcome. Suggested workflow:

1. Fork the repo
2. Create a branch: `feature/your-feature`
3. Make changes and commit with clear messages
4. Open a pull request describing the changes

If you have specific contribution guidelines or a code of conduct, link them here.

## License

Specify your license (for example MIT) or replace with the appropriate license name and link.

Licensed under the MIT License. See LICENSE for details.

## Contact

- GitHub: [ghsalah](https://github.com/ghsalah)
- Email: <salah121sias@gmail..com>


---

If you want, I can:

- Tailor this README to match the actual files and tech in your repo (I can scan the repository and update the sections accordingly),
- Add badges (build, license, coverage, deploy),
- Create a CONTRIBUTING.md or LICENSE file if you want.

Tell me which of the above you'd like and I will update the README accordingly.
>>>>>>> ccaafec55a327c2b052ae1358a46c935698204cb
