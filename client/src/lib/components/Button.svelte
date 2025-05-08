<script lang="ts">
	let {
		children,
		color = '#6c5ce7',
		padding = '1rem 2rem',
		fontSize = '1rem',
		isclicked = false,
		onClick,
		style
	}: {
		children(): any;
		color?: string;
		padding?: string;
		fontSize?: string;
		style?: string;
		isclicked?: boolean;
		onClick?(): void;
	} = $props();

	function hexToHSL(hex: string) {
		hex = hex.replace(/^#/, '');

		let r = parseInt(hex.substring(0, 2), 16) / 255;
		let g = parseInt(hex.substring(2, 4), 16) / 255;
		let b = parseInt(hex.substring(4, 6), 16) / 255;

		const max = Math.max(r, g, b),
			min = Math.min(r, g, b);
		let h = 0,
			s = 0,
			l = (max + min) / 2;

		if (max !== min) {
			const d = max - min;
			s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
			switch (max) {
				case r:
					h = (g - b) / d + (g < b ? 6 : 0);
					break;
				case g:
					h = (b - r) / d + 2;
					break;
				case b:
					h = (r - g) / d + 4;
					break;
			}
			h = h * 60;
		}

		return {
			h: Math.round(h),
			s: Math.round(s * 100),
			l: Math.round(l * 100)
		};
	}

	const { h, s, l } = hexToHSL(color);

	const frontColor = `hsl(${h}, ${s}%, ${l}%)`;
	const edgeGradient = `
		linear-gradient(
			to right,
			hsl(${h}, ${s}%, ${l - 19}%) 0%,
			hsl(${h}, ${s}%, ${l - 9}%) 8%,
			hsl(${h}, ${s}%, ${l - 19}%) 92%,
			hsl(${h}, ${s}%, ${l - 29}%) 100%
		)
	`;
	const shadowColor = `hsl(${(h + 180) % 360}, ${Math.max(s - 28, 0)}%, ${Math.min(l + 11, 100)}%)`;
</script>

<button
	class="pushable {isclicked ? 'isclicked' : ''}"
	style="font-size: {fontSize};"
	onclick={onClick}
>
	<span class="shadow" style="background: {shadowColor};"></span>
	<span class="edge" style="background: {edgeGradient};"></span>
	<span class="front" style="background: {frontColor}; padding: {padding}; {style}">
		{@render children()}
	</span>
</button>

<style>
	/* From Uiverse.io by PriyanshuGupta28 */
	.pushable {
		position: relative;
		background: transparent;
		padding: 0px;
		border: none;
		cursor: pointer;
		outline-offset: 4px;
		outline-color: deeppink;
		transition: filter 250ms;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	}

	.shadow {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background: hsl(226, 25%, 69%);
		border-radius: 8px;
		filter: blur(2px);
		will-change: transform;
		transform: translateY(2px);
		transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
	}

	.edge {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		border-radius: 8px;
		background: linear-gradient(
			to right,
			hsl(248, 39%, 39%) 0%,
			hsl(248, 39%, 49%) 8%,
			hsl(248, 39%, 39%) 92%,
			hsl(248, 39%, 29%) 100%
		);
	}

	.front {
		display: block;
		position: relative;
		border-radius: 8px;
		/* background: hsl(248, 53%, 58%); */
		/* padding: 0.5rem 1rem; */
		color: white;
		/* font-weight: 600; */
		/* text-transform: uppercase; */
		/* letter-spacing: 1.5px; */
		/* font-size: 1rem; */
		transform: translateY(-4px);
		transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
	}

	.pushable:hover {
		filter: brightness(110%);
	}

	.pushable:hover .front {
		transform: translateY(-6px);
		transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
	}

	.pushable:active .front {
		transform: translateY(-2px);
		transition: transform 34ms;
	}
	.pushable.isclicked .front {
		transform: translateY(0px);
		transition: transform 100ms;
	}

	.pushable:hover:not(.isclicked) .shadow {
		transform: translateY(4px);
		transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
	}

	.pushable:active .shadow {
		transform: translateY(1px);
		transition: transform 34ms;
	}
	.pushable:isclicked .shadow {
		transform: translateY(1px);
		transition: transform 34ms;
	}

	.pushable:focus:not(:focus-visible) {
		outline: none;
	}
</style>
