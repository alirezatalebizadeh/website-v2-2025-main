/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2AD883',
        secondary: '#000033',
        accent: '#8ED8F8',
        muted: '#BCBEC0',
      },
      fontFamily:{
        'iran-sans': ['var(--font-iransans)'],
      },
      dropShadow: {
        'ds-primary': '1px 4px 8px rgba(74, 82, 99, 0.12)', // معادل #4A52631F
        'ds-1': '0 6px 16px rgba(74, 82, 99, 0.12)',
        'ds-center': '0 0 20px rgba(74, 82, 99, 0.12)',
      },
    },
  },
  plugins: [],
};
