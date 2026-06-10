/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['SF Pro Display', 'Satoshi', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono', 'SFMono-Regular', 'ui-monospace', 'SFMono', 'Menlo', 'monospace'],
      },
      colors: {
        core: {
          bg: '#09090b',
          panel: 'rgba(24, 24, 27, 0.4)',
          border: 'rgba(255, 255, 255, 0.05)',
          borderHighlight: 'rgba(255, 255, 255, 0.12)',
        },
        text: {
          primary: '#f8fafc',
          secondary: '#94a3b8',
          accent: '#d4d4d8',
        },
      },
      boxShadow: {
        glass: 'inset 0 0 0 1px rgba(255,255,255,0.05)',
      },
      backdropBlur: {
        xxl: '20px',
      },
      animation: {
        'subtle-grid': 'subtle-grid 20s linear infinite',
      },
      keyframes: {
        'subtle-grid': {
          '0%, 100%': { backgroundPosition: '0 0' },
          '50%': { backgroundPosition: '40px 40px' },
        },
      },
    },
  },
  plugins: [],
}

