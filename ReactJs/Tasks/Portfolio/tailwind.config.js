/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'one': ['Oswald'],
        'second': ['Ubuntu']
      },
      colors:{
        "one":"#49885c",
        "second":"#ffffdf"
      }
    },
  },
  plugins: [require("daisyui")],
}

