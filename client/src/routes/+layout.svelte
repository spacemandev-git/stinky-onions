<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { registerSW } from '$lib/pwa';

	let { children } = $props();

	onMount(() => {
		// Register service worker for PWA functionality
		registerSW();
	});
</script>

{@render children()}
