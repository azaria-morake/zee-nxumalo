import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: '/', // Explicitly set base path
  plugins: [react()],
  build: {
    outDir: "dist",
  },
  esbuild: {
    loader: "tsx",
    include: /src\/.*\.[jt]sx?$/,
  },
  server: {
    port: 3000,
  }
});
