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
          bg: '#0a0a0f',
          card: '#13131f',
          border: '#1e1e2e'
        },
        neon: {
          blue: '#00a8ff',
          cyan: '#00e5ff',
          purple: '#7c3aed'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #00a8ff, 0 0 10px #00a8ff' },
          '100%': { boxShadow: '0 0 20px #00e5ff, 0 0 30px #00e5ff' }
        }
      }
    },
  },
  plugins: [],
}