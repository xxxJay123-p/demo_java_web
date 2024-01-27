import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import react from "@vitejs/plugin-react";
import Icons from "unplugin-icons/vite";

export default defineConfig(() => {
  return {
    build: {
      outDir: "build",
    },
    plugins: [react(), reactRefresh()],

    server: {
      port: 5000,
    },
  };
});
