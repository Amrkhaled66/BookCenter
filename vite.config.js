import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ["@emotion"],
      },
    }),
    svgr(),
  ],
  resolve: {
    alias: {
      src: "/src",
      components: "/src/components",
    },
  },

});
