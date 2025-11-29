import sitemap from "@pyyupsk/vite-plugin-sitemap";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import path from "node:path";
import unused from "unplugin-unused/vite";
import router from "unplugin-vue-router/vite";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    router(),
    vue(),
    tailwindcss(),
    sitemap({
      generateRobotsTxt: true,
      hostname: "https://vue.fasu.dev",
    }),
    unused({
      ignore: {
        dependencies: [
          "@pyyupsk/vite-plugin-sitemap",
          "@tailwindcss/vite",
          "tailwindcss",
          "tw-animate-css",
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    cors: true,
    hmr: {
      overlay: true,
    },
    port: 3000,
  },
});
