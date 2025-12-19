import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { emailServer } from "./vite-plugin-email.js";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 3007,
  },
  plugins: [react(), emailServer()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
