<script lang="ts">
	import TradePanelActivity from './TradePanelActivity.svelte';

	let activeTab = $state('Activity');
	const tabs = ['Activity', 'Positions', 'Trades', 'Balances'];
</script>

<div class="flex w-full flex-col overflow-hidden rounded-xl border-2 border-amber-200 bg-white">
	<div class="flex w-full bg-amber-100">
		{#each tabs as tab, i (i)}
			<button
				class="flex-1 cursor-pointer px-4 py-3 text-center font-semibold text-amber-900 transition-colors hover:bg-amber-200"
				class:bg-white={activeTab === tab}
				class:border-b-4={activeTab === tab}
				class:border-amber-500={activeTab === tab}
				onclick={() => (activeTab = tab)}
			>
				{tab}
			</button>
		{/each}
	</div>

	<div class="p-2">
		{#if activeTab === 'Activity'}
			<TradePanelActivity />
		{:else if activeTab === 'Positions'}
			<div class="p-4 text-center text-gray-500">Positions panel coming soon</div>
		{:else if activeTab === 'Trades'}
			<div class="p-4 text-center text-gray-500">Trades panel coming soon</div>
		{:else if activeTab === 'Balances'}
			<div class="p-4 text-center text-gray-500">Balances panel coming soon</div>
		{/if}
	</div>
</div>
