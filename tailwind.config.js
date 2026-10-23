/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Geist Mono', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        // Dark AI Engineering Lab palette
        bg: {
          DEFAULT: '#0A0D0C',
          base: '#0A0D0C',
        },
        surface: {
          DEFAULT: '#111511',
          primary: '#111511',
          elevated: '#171C17',
          subtle: '#0E130E',
        },
        border: {
          DEFAULT: '#2B332B',
          subtle: '#1F261F',
          highlight: '#3D4A3D',
        },
        text: {
          primary: '#F4F5F2',
          secondary: '#A5ADA4',
          muted: '#747D73',
        },
        accent: {
          lime: '#C7F36B',
          'lime-dim': 'rgba(199, 243, 107, 0.12)',
          'lime-glow': 'rgba(199, 243, 107, 0.25)',
          DEFAULT: '#C7F36B',
        },
        // Backward-compatible core aliases
        core: {
          bg: '#0A0D0C',
          surface: '#111511',
          panel: '#171C17',
          border: '#2B332B',
          borderHighlight: '#3D4A3D',
        },
      },
      boxShadow: {
        card: '0 1px 3px 0 rgba(0, 0, 0, 0.4), 0 1px 2px -1px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 8px 24px -4px rgba(0, 0, 0, 0.6), 0 2px 6px -1px rgba(199, 243, 107, 0.08)',
        lime: '0 0 20px -3px rgba(199, 243, 107, 0.25)',
        'lime-sm': '0 0 10px -2px rgba(199, 243, 107, 0.3)',
      },
      animation: {
        'fade-in': 'fade-in 0.4s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
        'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
      },
    },
  },
  plugins: [],
}
