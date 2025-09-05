// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   base: "/", // ✅ MUST be root since you're I'm on a custom domain
// });
// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Correct for custom domain
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
