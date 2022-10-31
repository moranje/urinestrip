/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      flex: {
        '1/4w': '1 1 calc(25% - 2rem)',
        '3/4w': '1 1 calc(75% - 2rem)',
      },
      minWidth: {
        12: '14rem',
        32: '24rem',
      },
    },
  },
  plugins: [],
};
