/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: '#03AED2',
      secondary: '#68D2E8',
      third: '#FDDE55',
      fourth: '#FEEFAD',
      black: '#000000',
      white: '#ffffff',
      blue: '#074173'
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      mono: ["Share Tech Mono", "monospace"]
    },
    extend: {},
  },
  plugins: [],
}

