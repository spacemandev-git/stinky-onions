<script lang="ts">
	import { onMount } from 'svelte';
	import Button from '../Button.svelte';
	let {
		onClose
	}: {
		onClose(): void;
	} = $props();

	let deferredPrompt: any = $state(null);
	let deviceType = $state('unknown');
	let isIOS = $state(false);
	let isChrome = $state(false);
	let isInstallable = $state(false);
	let installationSteps = $state<string[]>([]);

	// Check for PWA installability and device type
	onMount(() => {
		// Check if we're on iOS
		isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;

		// Check if we're on Chrome
		isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

		// Determine device type
		if (/Android/i.test(navigator.userAgent)) {
			deviceType = 'android';
		} else if (isIOS) {
			deviceType = 'ios';
		} else {
			deviceType = 'desktop';
		}

		// Set installation steps based on device
		setInstallationSteps();
	});

	function setInstallationSteps() {
		if (deviceType === 'ios') {
			installationSteps = [
				'Tap the Share button at the bottom of your browser',
				'Scroll down and tap "Add to Home Screen"',
				'Tap "Add" in the top right corner'
			];
		} else if (deviceType === 'android') {
			installationSteps = [
				'Tap the menu button (three dots) in your browser',
				'Select "Add to Home screen"',
				'Tap "Add" to confirm'
			];
		} else {
			installationSteps = [
				'Click the install icon in your address bar',
				'Click "Install" in the prompt that appears'
			];
		}
	}

	// Handle install prompt event
	onMount(() => {
		window.addEventListener('beforeinstallprompt', (e) => {
			// Prevent the mini-infobar from appearing on mobile
			e.preventDefault();
			// Store the event so it can be triggered later
			deferredPrompt = e;
			// Update UI to notify the user they can install the PWA
			isInstallable = true;
		});

		window.addEventListener('appinstalled', () => {
			// Clear the deferredPrompt so it can be garbage collected
			deferredPrompt = null;
			// Optionally, send analytics event to indicate successful install
			console.log('PWA was installed');
			// Close the modal
			onClose();
		});
	});

	// Install PWA
	async function installPWA() {
		if (!deferredPrompt) {
			return;
		}

		// Show the install prompt
		deferredPrompt.prompt();

		// Wait for the user to respond to the prompt
		const choiceResult = await deferredPrompt.userChoice;

		// Reset the deferred prompt variable, since prompt() can only be called once
		deferredPrompt = null;

		if (choiceResult.outcome === 'accepted') {
			console.log('User accepted the install prompt');
		} else {
			console.log('User dismissed the install prompt');
		}
	}

	// Event handlers
	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			onClose();
		}
	}

	function handleOverlayClick() {
		onClose();
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<!-- Modal Overlay with Backdrop -->
<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
	<!-- Modal Dialog -->
	<dialog
		class="mx-4 w-full max-w-md overflow-hidden rounded-2xl border-2 border-amber-200 bg-white p-0 shadow-lg open:block"
		open
		aria-labelledby="modal-title"
	>
		<!-- Modal Header with Close Button -->
		<div class="flex items-center justify-between rounded-t-[inherit] bg-amber-100 px-4 py-3">
			<h2 id="modal-title" class="text-xl font-bold text-amber-900">Install Onionarchy</h2>
			<button
				class="flex h-8 w-8 items-center justify-center rounded-full bg-amber-200 text-amber-900 transition-colors hover:bg-amber-300"
				onclick={onClose}
				aria-label="Close"
			>
				<span class="text-lg font-bold">×</span>
			</button>
		</div>

		<!-- Modal Body -->
		<div class="flex flex-col gap-4 p-6">
			<div class="flex items-center justify-center p-4">
				<img src="/favicon.png" alt="App Icon" class="h-24 w-24 rounded-2xl shadow-md" />
			</div>

			<p class="text-center text-lg text-amber-800">
				Install Onionarchy on your device for the best gaming experience!
			</p>

			{#if isInstallable}
				<div class="mt-2 flex justify-center">
					<Button onClick={installPWA} color="#45B27B" padding="0.75rem 2rem">Install Now</Button>
				</div>
			{:else}
				<div class="rounded-lg border border-amber-200 bg-amber-50 p-4">
					<h3 class="mb-2 font-bold text-amber-900">How to install:</h3>
					<ol class="list-decimal space-y-2 pl-6">
						{#each installationSteps as step, i (i)}
							<li class="text-amber-800">{step}</li>
						{/each}
					</ol>
				</div>

				{#if isIOS}
					<div class="text-center text-sm text-amber-600">
						On iOS, you'll need to use Safari to install web apps to your home screen.
					</div>
				{/if}
			{/if}

			<div class="mt-2 flex items-center justify-between border-t border-amber-100 pt-2">
				<button class="text-sm text-amber-600 hover:text-amber-800" onclick={onClose}>
					Remind me later
				</button>

				<div class="flex items-center gap-1">
					<span class="text-sm text-amber-700">Benefits:</span>
					<span class="rounded-full bg-amber-100 px-2 py-1 text-xs text-amber-800"
						>Becomes an App</span
					>
					<span class="rounded-full bg-amber-100 px-2 py-1 text-xs text-amber-800">Faster</span>
				</div>
			</div>
		</div>
	</dialog>

	<!-- Invisible overlay to close modal when clicking outside -->
	<button
		class="fixed inset-0 h-full w-full cursor-default bg-transparent"
		onclick={handleOverlayClick}
		aria-label="Close modal"
		tabindex="-1"
	></button>
</div>

<style>
	/* Dialog styling */
	dialog {
		margin: auto;
		z-index: 51;
		overflow: visible;
	}
	dialog::backdrop {
		display: none;
	}

	/* Animation for dialog */
	dialog {
		animation: modal-pop 0.3s ease-out forwards;
	}

	@keyframes modal-pop {
		0% {
			transform: scale(0.9);
			opacity: 0;
		}
		100% {
			transform: scale(1);
			opacity: 1;
		}
	}
</style>
