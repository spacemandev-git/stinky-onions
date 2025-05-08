<script>
	export let text = 'TEXT'; // Prop to customize the banner text
</script>

<div class="banner-container">
	<div class="banner">
		{text}
	</div>
</div>

<style>
	.banner-container {
		width: 100%; /* Stretch to fit the parent container */
		position: relative;
		display: inline-block; /* Ensures the container wraps the banner tightly */
	}

	.banner {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		width: 100%; /* Full width of the container */
		height: 60px; /* Fixed height to maintain proportions */
		background-color: #ff4040; /* Red color matching the image */
		border: 2px solid #000;
		border-radius: 10px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
		color: white;
		font-size: 24px;
		font-weight: bold;
		text-transform: uppercase;
		font-family: Arial, sans-serif;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
	}

	/* Left folded end */
	.banner::before {
		content: '';
		position: absolute;
		left: -20px;
		top: 0;
		width: 20px;
		height: 60px;
		background-color: #ff4040;
		border: 2px solid #000;
		border-right: none;
		border-radius: 10px 0 0 10px;
		transform: perspective(100px) rotateY(30deg);
		box-shadow: -2px 2px 4px rgba(0, 0, 0, 0.3);
	}

	/* Right folded end */
	.banner::after {
		content: '';
		position: absolute;
		right: -20px;
		top: 0;
		width: 20px;
		height: 60px;
		background-color: #ff4040;
		border: 2px solid #000;
		border-left: none;
		border-radius: 0 10px 10px 0;
		transform: perspective(100px) rotateY(-30deg);
		box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
	}

	/* Adjust font size based on container width for responsiveness */
	@media (max-width: 600px) {
		.banner {
			font-size: 18px;
			height: 50px;
		}
		.banner::before,
		.banner::after {
			height: 50px;
			width: 15px;
			left: -15px;
		}
		.banner::after {
			right: -15px;
		}
	}

	@media (max-width: 400px) {
		.banner {
			font-size: 14px;
			height: 40px;
		}
		.banner::before,
		.banner::after {
			height: 40px;
			width: 10px;
			left: -10px;
		}
		.banner::after {
			right: -10px;
		}
	}
</style>
