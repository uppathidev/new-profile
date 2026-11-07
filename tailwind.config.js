/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a0c10',
        surface: '#12151b',
        raised: '#191d25',
        line: '#262c37',
        fg: '#e7ebf2',
        muted: '#9ba5b4',
        accent: '#4aa3ff',
        'accent-hover': '#7bbcff',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
