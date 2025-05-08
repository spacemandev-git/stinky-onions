<script lang="ts">
	// Sample data for demonstration - in a real app, this would come from props or stores
	const activities = [
		{ id: 'HJK1...AsWv', position: false, type: 'sell', amount: 0.37, timestamp: 'May 4, 18:05' },
		{ id: 'JJK1...Svvv', position: true, type: 'sell', amount: 0.63, timestamp: 'May 4, 18:03' },
		{ id: 'JJK1...Svvv', position: true, type: 'buy', amount: 0.64, timestamp: 'May 4, 18:02' }
	];
</script>

<div class="w-full overflow-hidden rounded-lg">
	<div class="mb-2 grid grid-cols-5 gap-2 text-center font-semibold">
		<div class="p-2 text-amber-800">Market ID</div>
		<div class="p-2 text-amber-800">Positions</div>
		<div class="p-2 text-amber-800">Trades</div>
		<div class="p-2 text-amber-800">Amount</div>
		<div class="p-2 text-amber-800">Date/Time</div>
	</div>

	{#each activities as activity, i (i)}
		<div
			class="grid grid-cols-5 items-center gap-2 border-b border-amber-100 py-1 text-center last:border-b-0"
		>
			<div class="p-2 text-gray-700">{activity.id}</div>
			<div class="flex justify-center p-2">
				<span
					class={`rounded-full px-3 py-1 text-sm ${activity.position ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
				>
					{activity.position ? 'YES' : 'NO'}
				</span>
			</div>
			<div class="p-2 text-gray-700">{activity.type}</div>
			<div class="p-2 text-gray-700">${activity.amount.toFixed(2)}</div>
			<div class="p-2 text-gray-500">{activity.timestamp}</div>
		</div>
	{/each}
</div>
