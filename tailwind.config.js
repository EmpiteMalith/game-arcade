/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkBlack: "#151515",
        darkGray: "#3b3b3b",
        lightGray: "#BFBFBF",
        nero:"#202020",
        greyBlueberry:"#718096",
      },
      flexGrow: {
        2: '2'
      },
      flex: {
        '2': '2 2 0%',
        '4': '4 4 0%'
      }
    },
  },
  plugins: [],
}

