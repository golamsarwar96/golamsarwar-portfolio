/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Raleway", "serif"],
        secondary: ["Playfair Display", "serif"],
      },
      colors: {
        primaryColor: "#0db41",
        textPrimaryColor: "#c2ff75",
        textColor: "#f1daae",
        textSecondaryColor: "#F0F0D8",
        optionalColor: "#96ee5",
      },
    },
  },
  plugins: [require("daisyui")],
};
