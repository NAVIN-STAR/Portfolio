# Portfolio Website

A modern, minimal, professional portfolio website built with React and Tailwind CSS.

## Features

- Single-page application with smooth scrolling navigation
- Responsive design (desktop-first, mobile-friendly)
- Modern UI with clean spacing and visual hierarchy
- Sections: Hero, About, Skills, Projects, Experience, Achievements, Contact

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Lucide React (Icons)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

````markdown
# Portfolio Website

A modern, minimal, professional portfolio website built with React and Tailwind CSS.

## Features

- Single-page application with smooth scrolling navigation
- Responsive design (desktop-first, mobile-friendly)
- Modern UI with clean spacing and visual hierarchy
- Sections: Hero, About, Skills, Projects, Experience, Achievements, Contact

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Lucide React (Icons)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
  components/
    Navigation.jsx
    Hero.jsx
    About.jsx
    Skills.jsx
    Projects.jsx
    Experience.jsx
    Achievements.jsx
    Contact.jsx
  App.jsx
  main.jsx
  index.css
```

## Customization

- Update contact information in `Contact.jsx`
- Modify project details in `Projects.jsx`
- Adjust skills in `Skills.jsx`
- Update experience in `Experience.jsx`
- Change color scheme in `tailwind.config.js` (accent color)

## Deploy to GitHub Pages

This repo includes a GitHub Actions workflow that builds the site and deploys the `dist` folder to GitHub Pages when you push to the `main` branch.

Quick steps:

1. Push this repository to GitHub and ensure the default branch is `main`.
2. The workflow at [.github/workflows/deploy.yml](.github/workflows/deploy.yml) will run on push and publish the site.
3. The site will be available at `https://<your-username>.github.io/<your-repo>/`.

If you prefer a local deploy (using the `gh-pages` package) instead, tell me and I'll add the scripts to `package.json`.

````

