import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";

export default defineConfig(async () => {
  return {
    plugins: [Vue()],
    resolve: {
      alias: { "@": "/src" },
    },
  };
});
