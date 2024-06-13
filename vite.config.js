import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ghPages } from "vite-plugin-gh-pages";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/react-ecommerce-front/",
  plugins: [react(), ghPages()],
  build: {
    outDir: "dist", // Répertoire de sortie par défaut pour Vite
  },
});
