import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/valentine-s/", // Use exact repository name
  plugins: [react()],
});
