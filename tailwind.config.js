/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true, // Centers the container
        padding: {
          DEFAULT: "1.2rem",
          sm: "1rem",
          lg: "1.5rem",
          xl: "2rem",
          "2xl": "6rem",
        },
      },
      colors: {
        "main-color": "var(--main-color)",
        "second-color": "var(--second-color)",
        "darkAndWhite-color": "var(--darkAndWhite-color)",
        "main-text--color": "var(--main__text-color)",
        "second-text--color": "var(--second__text-color)",
        "black-color": "#000000",
        "white-color": "#ffffff",
      },

      fontFamily: {
        Changa: ["Changa", "sans-serif"],
        mainFont: ["RadyPro", "sans-serif"],
        mainFontRegular: ["RadyProRegular", "sans-serif"],
        secondFont: ["IBM Plex Sans Arabic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
