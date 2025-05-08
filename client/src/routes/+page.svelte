<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import DecisionChart from '$lib/components/chart/DecisionChart.svelte';
	import ModalInstallPwa from '$lib/components/Modal/ModalInstallPwa.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import TradePane from '$lib/components/TradePane.svelte';
	import TradePanels from '$lib/components/TradePanels/TradePanels.svelte';
	import { isInstalledPwa } from '$lib/pwa';

	const isPwa = isInstalledPwa();
	let isOpenPwa = $state(false);
	const onOpen = () => setTimeout(() => (isOpenPwa = true), 120);
</script>

{#if isOpenPwa}
	<ModalInstallPwa onClose={() => (isOpenPwa = false)} />
{/if}

<div class="container mx-auto flex min-h-screen max-w-4xl flex-col gap-4 p-2">
	<div class="flex flex-col items-center justify-between gap-6 sm:flex-row">
		<div class="flex gap-4 font-bold">
			<p class="nav select-none">Trade</p>
			<p class="nav cursor-pointer opacity-30 select-none">Leaderboard</p>
		</div>
		{#if !isPwa}
			<div>
				<Button padding="0.25rem 2rem" onClick={onOpen}>Install App</Button>
			</div>
		{/if}
		<Nav />
	</div>
	<div class="w-full">
		<div
			class="flex flex-col items-center justify-center gap-2 py-4 text-center text-3xl text-sky-800"
		>
			<p
				class="animate-text-gradient inline-flex bg-gradient-to-r from-red-400 via-sky-400 to-green-400 bg-[200%_auto] bg-clip-text text-transparent"
			>
				Should each attendee get a complimentary NFT?
			</p>
		</div>
		<div class="grid grid-cols-1 gap-2 sm:grid-cols-[3fr_1fr]">
			<DecisionChart />
			<TradePane />
		</div>
	</div>
	<TradePanels />
</div>

<style>
	.nav {
		text-shadow: 0px 1px white;
	}
</style>
