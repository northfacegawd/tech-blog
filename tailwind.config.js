const primary = '#0AC5A8';

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '.dark-mode'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: { primary },
      backgroundColor: {
        primary,
        button: 'rgba(255, 255, 255, 0.08)',
        'manifesto-gradient': `linear-gradient(
        180deg,
        white 0%,
        rgba(0, 0, 0, 1) 80%,
        rgba(0, 0, 0, 1) 100%
      )`,
      },
      borderColor: { primary },
      transitionTimingFunction: {
        'button-click': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      scale: {
        150: '1.5',
      },
    },
  },
  plugins: [require('tailwindcss-textshadow')],
};
