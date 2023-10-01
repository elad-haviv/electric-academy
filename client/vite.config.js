import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    return {
        server: {
            host: "0.0.0.0",
            cors: true,
            proxy: {
                '/api': 'http://localhost:3001'
            }
        },
        plugins: [react()],
    };
});
