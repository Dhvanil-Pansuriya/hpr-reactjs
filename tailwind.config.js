/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0075ff",
        "main-background": "#f2f5f7",
        "background-light": "#f0f8ff",
        primary: "#4a90e2",
        "primary-light": "#ffffff",
        secondary: "#2c3e50",

        // background: "#ffd700",
        // "main-background": "#fff5e6",
        // "background-light": "#fffaf0",
        // primary: "#ffc107",
        // "primary-light": "#ffffff",
        // secondary: "#2c3e50",
      },

      fontFamily: {
        heading: ["Open Sans", "sans-serif"],
        description: ["Lexend", "sans-serif"],
        button: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-motion"), require("tailwindcss-animated")],
};
