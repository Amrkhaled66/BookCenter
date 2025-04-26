/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        "container-shadow":
          "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;",
      },
      screens: {
        xMd: "777px",
      },
      container: {
        center: true,
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
        "fourth-color": "var(--fourth-color)",
        "darkAndWhite-color": "var(--darkAndWhite-color)",
        "main-text--color": "var(--main__text-color)",
        "second-text--color": "var(--second__text-color)",
        "card-color": "var(--card-color)",
        "black-color": "#000000",
        "white-color": "#ffffff",
        "gray-color": "var(--gray-color)",
        "wood-color": "var(--wood-color)",
        "footer-color": "var(--footer-color)",
      },

      fontFamily: {
        mainFont: ["El Messiri", "sans-serif"],
        secondFont: ["Blabeloo", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        cairo: ["Cairo", "sans-serif"],
      },
    },
  },
};
