<script lang="ts">
	import Button from './Button.svelte';

	let value = $state(0);
</script>

<div
	class="relative flex min-h-48 w-full flex-col justify-between gap-6 rounded-xl border-2 border-amber-200 bg-white p-2 sm:gap-0"
>
	<p
		class=" w-full rounded-b-4xl border-b-2 border-b-amber-600/20 bg-gradient-to-b from-transparent to-amber-100 py-2 text-center text-2xl text-amber-600"
	>
		If Approved
	</p>
	<div class="flex w-full flex-col">
		{@render inputNumber()}
		{@render sizes()}
	</div>
	<div>
		<div class="flex justify-between gap-1">
			<Button color="#ef4444" padding="0.5rem 0.75rem">No - $0.44</Button>
			<Button color="#45B27B" padding="0.5rem 0.75rem">Yes - $0.56</Button>
		</div>
		<div class="my-2 h-1 w-full rounded-full bg-amber-700"></div>
		<div class="grid grid-cols-2 text-amber-600">
			<span>Avg Price:</span>
			<span class="justify-self-end">$0.56</span>

			<span>Est Payout:</span>
			<span class="justify-self-end">${Math.floor(value * 0.56 * 100) / 100}</span>
		</div>
	</div>
</div>

{#snippet inputNumber()}
	<div class="flex w-full items-center justify-between gap-2 rounded-lg bg-amber-200">
		<Button padding="6px 1rem" color="#f87171" onClick={() => (value -= 1)}>-</Button>
		<input type="number" bind:value />
		<Button padding="6px 1rem" color="#4ade80" onClick={() => (value += 1)}>+</Button>
	</div>
{/snippet}
{#snippet sizes()}
	<div class="mt-6 flex w-full justify-between sm:mt-4">
		{#each [5, 10, 50, 100] as size (size)}
			<Button padding="4px 1.25rem" style="font-size:16px;" onClick={() => (value += size)}
				>{size}</Button
			>
		{/each}
	</div>
{/snippet}

<style>
	input {
		all: unset;
		text-align: center;
	}
</style>
