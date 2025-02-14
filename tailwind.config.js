/* eslint-disable no-undef */
// tailwind.config.js
module.exports = {
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}', // Include all JSX/TSX files
    ],
    theme: {
      extend: {
        fontFamily: {
          playfair: ['Playfair Display', 'serif'],
        },
      },
    },
    plugins: [],
  };