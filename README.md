# RR Premium Living

Marketing website for RR Premium Living, a premium PG and co-living brand for
students and working professionals in Hyderabad and Bangalore.

## Tech stack

- React
- Vite
- Framer Motion
- Lenis
- Phosphor Icons
- Sonner
- Tailwind CSS

## Getting started

### Prerequisites

- Node.js 18 or newer (Node.js 20+ recommended)
- Yarn, or Corepack included with Node.js

### 1. Clone the repository

```bash
git clone https://github.com/leelakalyan-kk/RR-premium-living.git
cd RR-premium-living
```

### 2. Install packages

Using Yarn with Corepack:

```bash
corepack enable
yarn install
```

If Yarn is already installed, run:

```bash
yarn install
```

Packages are declared in `package.json`, and `yarn.lock` keeps their versions
consistent. Do not commit `node_modules/`; it is intentionally excluded by
`.gitignore`.

### 3. Run the development server

```bash
yarn dev
```

Open [http://localhost:5173/](http://localhost:5173/) in your browser. The
server reloads automatically when source files change.

### 4. Create a production build

```bash
yarn build
```

To preview the production build locally:

```bash
yarn preview
```

### Available scripts

| Command | Purpose |
| --- | --- |
| `yarn dev` | Start the Vite development server |
| `yarn build` | Build the optimized production bundle |
| `yarn preview` | Serve the production bundle locally |

## Project structure

```text
public/              Static assets and favicon
src/App.jsx          Main application component
src/main.jsx         React application entry point
src/components/      Page sections and reusable UI components
src/constants/       Site content and configuration
src/App.css          Application styles
src/index.css        Global styles
index.html           Vite HTML entry point
vite.config.js       Vite configuration and import aliases
tailwind.config.js   Tailwind CSS configuration
```

## Adding dependencies

Use Yarn to add packages:

```bash
yarn add <package-name>
```

Keep `yarn.lock` committed so other contributors install the same dependency
versions.

## Contributing guidelines

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-change`.
3. Install dependencies with `yarn install`.
4. Make your changes and run `yarn build`.
5. Check the result in the browser with `yarn dev`.
6. Do not commit `node_modules/` or environment secrets.
7. Push your branch and open a pull request with a clear description.

## License

No license has been specified yet.
