import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    port: 5174, // 👈 Change this to any port you like
    host: true, // optional: allows access from LAN
  },
});
