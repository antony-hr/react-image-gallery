import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from "node:path"

// https://vite.dev/config/
export default defineConfig({
	base: "/react-image-gallery/",
	resolve: {
		alias: [
			{ find: "@", replacement: resolve(__dirname, "./src") },
		]
	},
	plugins: [react()],
})
