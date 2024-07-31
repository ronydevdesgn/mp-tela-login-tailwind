/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
      backgroundImage: {
        'bg-image': "url('./assets/image/bg.jpg')",
      }
    },
  },
  plugins: [],
}

