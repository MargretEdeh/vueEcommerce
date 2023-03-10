/** @type {import('tailwindcss').Config} */
module.exports = {

  mode: 'jit', // enable Just-In-Time (JIT) mode
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'], // files to be scanned for used styles
  darkMode: 'class', 

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary' : "#320281",
        "secondary": "#Ac7ff8",
        "fade": "rgba(255, 255, 255, 0.5)",
      }
    },
  },
  plugins: [],
}
