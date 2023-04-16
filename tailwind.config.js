/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "main-gray":"#F4F3F1",
        "main-green":"#119C59",
        "main-black":"#25282B",
        "main-yellow":"#FFE3B3"
      }
    },
  },
  plugins: [],
}

