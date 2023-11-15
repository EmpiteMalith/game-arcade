/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlack: "#151515",
        darkGray: "#3b3b3b",
        lightGray: "#BFBFBF"
      },
      flexGrow: {
        2: '2'
      }
    },
  },
  plugins: [],
}

