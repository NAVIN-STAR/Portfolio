/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#1E1E1F',
          card: '#2A2A2B',
          border: '#3A3A3B',
        },
        accent: {
          DEFAULT: '#1e3a8a',
          dark: '#1e40af',
          light: '#3b82f6',
          lighter: '#60a5fa',
        },
      },
    },
  },
  plugins: [],
}

