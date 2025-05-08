import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
	plugins: [
		sveltekit(),
		tailwindcss(),
		VitePWA({
			registerType: 'prompt',
			devOptions: {
				enabled: true,
				type: 'module'
			},
			workbox: {
				globPatterns: ['**/*.{js,css,html,svg,png,jpg,jpeg,ico}'],
				clientsClaim: true,
				skipWaiting: true
			},
			strategies: 'generateSW',
			manifest: {
				name: 'Onionarchy',
				short_name: 'Onionarchy',
				description: 'Onionarchy App',
				theme_color: '#ffffff',
				background_color: '#ffffff',
				display: 'standalone',
				start_url: '/',
				icons: [
					{
						src: 'pwa-192x192.png',
						sizes: '192x192',
						type: 'image/png'
					},
					{
						src: 'pwa-512x512.png',
						sizes: '512x512',
						type: 'image/png'
					},
					{
						src: 'pwa-512x512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any maskable'
					}
				]
			}
		})
	]
});
