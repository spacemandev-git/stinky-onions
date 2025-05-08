<script lang="ts">
	import { LineChart } from 'layerchart';
	import { generateDataPoints } from './mock_multidata';
	import { curveCatmullRom } from 'd3-shape';
	import { extent } from 'd3-array';
	import IconClock from '$lib/icon/IconClock.svelte';

	const chartData = generateDataPoints(60);
	const yValues = chartData.flatMap((d) => [d.yes, d.no]);
	const [minY, maxY] = extent(yValues);
</script>

<div class="relative h-[400px] rounded-xl border-2 border-amber-200 bg-white p-4">
	<div
		class="absolute top-1 right-0 z-10 flex w-full justify-center opacity-50 transition-all select-none hover:opacity-100"
	>
		<span
			class="hover:animate-wiggle flex w-fit items-center gap-1 rounded-full bg-amber-950 px-2 py-1 text-xs text-amber-100"
		>
			<IconClock w={10} h={10} /> Ends in 18 hours
		</span>
	</div>
	<LineChart
		data={chartData}
		x="date"
		points
		yDomain={[minY, maxY]}
		props={{
			yAxis: { tweened: true },
			xAxis: {
				tweened: true,
				ticks: 8,
				format: (d: Date) =>
					`${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`
			},
			spline: { curve: curveCatmullRom, strokeWidth: 3, draw: true }
		}}
		series={[
			{ key: 'no', color: 'red' },
			{ key: 'yes', color: 'green' }
		]}
	/>
</div>
