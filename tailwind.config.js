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
        accent: {
          glow: '#22d3ee',
          dim: '#0e7490',
          purple: '#a78bfa',
          blue: '#3b82f6',
        },
      },
      boxShadow: {
        glass: 'inset 0 0 0 1px rgba(255,255,255,0.05)',
        'glass-hover': 'inset 0 0 0 1px rgba(255,255,255,0.1), 0 0 20px rgba(34,211,238,0.05)',
        'glow-sm': '0 0 15px rgba(34,211,238,0.15)',
        'glow-md': '0 0 30px rgba(34,211,238,0.2), 0 0 60px rgba(34,211,238,0.05)',
        'glow-lg': '0 0 40px rgba(34,211,238,0.25), 0 0 80px rgba(34,211,238,0.1)',
      },
      backdropBlur: {
        xxl: '20px',
      },
      animation: {
        'subtle-grid': 'subtle-grid 20s linear infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.5s ease-out forwards',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'float-slow': 'float-slow 20s ease-in-out infinite',
        'float-slower': 'float-slower 25s ease-in-out infinite',
        'float-slowest': 'float-slowest 30s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
      },
      keyframes: {
        'subtle-grid': {
          '0%, 100%': { backgroundPosition: '0 0' },
          '50%': { backgroundPosition: '40px 40px' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -20px) scale(1.05)' },
          '66%': { transform: 'translate(-20px, 15px) scale(0.95)' },
        },
        'float-slower': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(-25px, 20px) scale(1.03)' },
          '66%': { transform: 'translate(20px, -25px) scale(0.97)' },
        },
        'float-slowest': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(15px, 25px) scale(1.02)' },
          '66%': { transform: 'translate(-30px, -10px) scale(0.98)' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
      },
      transitionDelay: {
        '0': '0ms',
        '100': '100ms',
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
        '600': '600ms',
        '700': '700ms',
      },
    },
  },
  plugins: [],
}
