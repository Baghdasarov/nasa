import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  let env = loadEnv(mode, process.cwd(), "VITE_API_URL");

  // Optional: Populate NODE_ENV with the current mode (development/production)
  env.NODE_ENV = mode;

  const envWithProcessPrefix = {
    "process.env": `${JSON.stringify(env)}`,
  };

  return {
    plugins: [react()],
    define: envWithProcessPrefix,
    resolve: {
      alias: {
        src: "/src",
      },
    },
  };
});
