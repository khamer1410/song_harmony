<script lang="ts">
	export let src: string;
	export let muted: boolean;
	export let name: string;
	export let playing: boolean;
	export let looping: boolean;
	let audioElement: HTMLAudioElement;

	// play / pause reaction
	$: if (playing) {
		audioElement?.play();
	} else {
		audioElement?.pause();
	}
</script>

<section class="flex gap-2">
	<audio bind:this={audioElement} {src} loop={looping} {muted} controls class="hidden" />
	<h2>{name}</h2>
	<label class="inline-flex items-center cursor-pointer">
		<input type="checkbox" class="switch warn lg" data-content="🔇" bind:checked={muted} />
	</label>
</section>
