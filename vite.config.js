import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: "esnext", // Ensure compatibility with modern libraries
    rollupOptions: {
      output: {
        manualChunks: {
          swiper: ["swiper"], // Optimize Swiper by creating its own chunk
        },
      },
    },
  },
  optimizeDeps: {
    include: ["swiper"], // Pre-bundle Swiper for better compatibility
  },
});
