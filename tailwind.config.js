const primary = '#0AC5A8';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: { primary },
      backgroundColor: { primary, button: 'rgba(255, 255, 255, 0.08)' },
      borderColor: { primary },
      transitionTimingFunction: {
        'button-click': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
