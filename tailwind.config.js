/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#05070a',
        panel: 'rgba(255,255,255,0.045)',
        line: 'rgba(255,255,255,0.1)',
        muted: '#8b9bab',
        accent: '#ffffff',
        'accent-2': '#888888',
        'accent-3': '#444444',
      },
      fontFamily: {
        mono: ['var(--font-jetbrains)', 'monospace'],
        display: ['var(--font-fraunces)', 'serif'],
        body: ['var(--font-instrument)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};