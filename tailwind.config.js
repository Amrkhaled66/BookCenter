/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-5px)" },
          "20%, 40%, 60%, 80%": { transform: "translateX(5px)" },
        },
      },
      animation: {
        shake: "shake 2s ease-in-out 0s 1,shake 2s ease-in-out 3s infinite",
      },
      backgroundImage: {
        "product-bg": "url('/src/assets/asset.png')",
        footerBg: "url('/src/assets/footerBg.png')",
        waveBG: "url('/src/assets/waveBG.svg')",
        dots:"url('/src/assets/dotsBg.png')",
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
        "darkAndWhite-color": "var(--darkAndWhite-color)",
        "main-text--color": "var(--main__text-color)",
        "second-text--color": "var(--second__text-color)",
        "black-color": "#000000",
        "white-color": "#ffffff",
      },

      fontFamily: {
        mainFont: ["RadyPro", "sans-serif"],
        mainFontRegular: ["RadyProRegular", "sans-serif"],
        secondFont: ["Blabeloo", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        cairo: ["Cairo", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-motion")],
};
