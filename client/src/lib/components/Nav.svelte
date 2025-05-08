<script lang="ts">
	import { onMount } from 'svelte';
	import type { TwitterProfile } from '$lib/stores/twitter';
	import { redirectToTwitterAuth } from '$lib/api';
	import { loadTwitterProfile, subscribeToProfile } from '$lib/auth';
	import Button from './Button.svelte';
	import IconMoney from '$lib/icon/IconMoney.svelte';
	import { Confetti } from 'svelte-confetti';
	import IconClock from '$lib/icon/IconClock.svelte';

	let profile: TwitterProfile | null = $state(null);
	let loggingIn = $state(false);
	let isClaimed = $state(false);
	const onClaim = () => setTimeout(() => (isClaimed = true), 120);

	function loginWithTwitter() {
		loggingIn = true;
		redirectToTwitterAuth();
	}

	onMount(() => {
		if (typeof window === 'undefined') return;
		loadTwitterProfile().then((result) => (profile = result));
		const unsubscribe = subscribeToProfile((p) => (profile = p));
		return () => unsubscribe();
	});
</script>

{#snippet loginButton()}
	<button
		class="rounded bg-blue-500 px-6 py-3 font-semibold text-white shadow transition-all hover:bg-blue-600 disabled:opacity-50"
		onclick={loginWithTwitter}
		disabled={loggingIn}
	>
		{loggingIn ? 'Redirecting…' : 'Sign in with Twitter'}
	</button>
{/snippet}

{#snippet profileCard()}
	{@const { screen_name, name, profile_image_url_https } = profile as TwitterProfile}
	<div
		class="relative flex items-center gap-2 rounded-lg border-2 border-sky-900/40 bg-sky-400 px-2 py-1 text-sky-900"
	>
		<div class="group relative select-none">
			<div
				class="pointer-events-none absolute inset-0 animate-[var(--animate-shimmer)] rounded-lg bg-gradient-to-r from-transparent
              via-white/30 to-transparent bg-[length:200%_100%]
              opacity-0 transition-all group-hover:opacity-100"
			></div>

			<img
				src={profile_image_url_https}
				alt={screen_name}
				class="h-10 w-10 rounded-lg border-b-2 border-sky-900/40"
			/>
		</div>
		<p class="text-md font-bold">{name}</p>
		<div class="relative flex items-center rounded bg-white/20 px-2 py-1">
			<IconMoney w={25} h={25} />
			<p class="mr-3 text-xs font-bold opacity-70">{600 + (isClaimed ? 50 : 0)}</p>

			{#if isClaimed}
				<Confetti x={[-0.85, 0.25]} y={[-0.5, 0.5]} />
				<button
					class="flex items-center gap-1 rounded-lg bg-amber-500 px-[8px] py-[3px] text-xs text-white"
				>
					<IconClock w={10} h={10} />
					<span> 8 hrs </span>
				</button>
			{:else}
				<Button
					padding="3px 10px"
					fontSize="12px"
					color="#f59e0b"
					style="font-weight:700;"
					onClick={onClaim}
				>
					Claim
				</Button>
			{/if}
		</div>
	</div>
{/snippet}

{#if profile}
	{@render profileCard()}
{:else}
	{@render loginButton()}
{/if}
