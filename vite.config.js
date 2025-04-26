import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import checker from "vite-plugin-checker";
import caseSensitivePlugin from './case-sensitive-plugin';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ["@emotion"],

      },
    }),
    svgr(),
    caseSensitivePlugin(),
  ],
  resolve: {
    alias: {
      src: "/src",
      components: "/src/components",
    },
  },
});
