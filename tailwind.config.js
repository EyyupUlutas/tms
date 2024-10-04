/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Tüm site için varsayılan font
        gilroy: ['Gilroy', 'sans-serif'],   // Belirli alanlar için ekstra font
      },
    },
  },
  plugins: [],
}