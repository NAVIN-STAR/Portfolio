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

# Portfolio Website

A modern, responsive, and interactive portfolio website for **Nabin Acharya** built with React, Vite, and Tailwind CSS.

## About This Portfolio

This is a professional single-page application showcasing:
- Personal background and professional summary
- Technical skills and expertise
- Work experience and achievements
- Project portfolio with descriptions
- Contact information and links

## Features

✨ **Modern Design**
- Clean, minimal aesthetic with teal accents
- Smooth scrolling navigation between sections
- Fully responsive (mobile, tablet, desktop)
- Fast load times with Vite build optimization

📱 **Interactive UI**
- Dynamic active section tracking during scroll
- Smooth scroll-to-section navigation
- Icon-based visual elements (Lucide React)
- Professional typography and spacing

## Tech Stack

- **Frontend:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** GitHub Pages + GitHub Actions

## Getting Started

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Output is in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
  components/
    Navigation.jsx      - Navigation bar with smooth scroll links
    Hero.jsx            - Header section with intro
    About.jsx           - About/Bio section
    Experience.jsx      - Work experience timeline
    Projects.jsx        - Portfolio of projects
    Skills.jsx          - Technical skills display
    Achievements.jsx    - Awards and accomplishments
    Contact.jsx         - Contact form and links
  App.jsx              - Main app component with scroll tracking
  main.jsx             - React entry point
  index.css            - Global styles

public/
  favicon.svg          - Browser icon (teal with "NA")
```

## Customization

To personalize this portfolio:

- **Content:** Update component text in `src/components/`
- **Contact Info:** Edit `Contact.jsx` with email/links
- **Projects:** Modify `Projects.jsx` with your work samples
- **Skills:** Update `Skills.jsx` with your tech stack
- **Experience:** Edit `Experience.jsx` with your career history
- **Colors:** Adjust the teal accent color in `tailwind.config.js`

## Deployment

### Deploy to GitHub Pages (Automated)

This repo includes a GitHub Actions workflow that:
1. Builds the project on every push to `main`
2. Deploys the `dist/` folder to GitHub Pages
3. Publishes the site at `https://<username>.github.io/<repo>/`

**Setup:**
1. Push this repository to GitHub with `main` as the default branch
2. The workflow ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) runs automatically
3. Site goes live after a successful build (watch the Actions tab)

No additional configuration needed—automatic deployment on every commit!

## License

Personal portfolio project. Feel free to use as a template.

---

**Built with ❤️ using React + Vite**

