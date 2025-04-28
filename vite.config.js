import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
// import Checker from "vite-plugin-checker";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ["@emotion"],
      },
    }),
    svgr(),
    // Checker({
    //   eslint: {
    //     lintCommand: 'eslint "./src/**/*.{js,jsx}"', // Run ESLint during build
    //   },
    // }),
  ],
  resolve: {
    alias: {
      src: "/src",
      components: "/src/components",
    },
  },
});
