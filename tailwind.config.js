/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins:['Poppins', 'sans-serif'],
        kaushan:['Kaushan Script', 'cursive'],
        offside:['Offside', 'sans-serif'],
        marcellus:['Marcellus', 'serif'],
        'MarcellusSC' : ['Marcellus SC','serif']
      },
    },
  },
  plugins: [],
}