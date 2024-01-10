/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amazonclone: {
          header: "#131921",
          nav: "#222F3E",
          backtotop:'#485769',
          footer:"#232E3E",
          background: "#EAEDED",
          light_blue: "#232F3A",
          yellow: "#FDDFD7",
          DEFAULT: "#131921",
        },
      },
    },
  },
  plugins: [],
};
