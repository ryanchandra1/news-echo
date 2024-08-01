/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {},
    screens: {
      "mobile":"320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      'domaine': ['Domaine Display'],
      'josefin-sans': ['Josefin Sans'],
      'roboto': ['Roboto'],
    },  
  },
  plugins: [],
}

