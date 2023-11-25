<script lang="ts">
	import { getSongHarmony } from '$lib';
	import AudioPlayer from '@/lib/components/AudioPlayer.svelte';

	const songData = getSongHarmony();

	let allMuted = false;
	let allPlaying = false;
	let looping = false;

	function playFromStart() {
		const audios = document.querySelectorAll('audio');
		audios.forEach((audio) => {
			audio.currentTime = 0;
			audio.play();
		});
		allPlaying = true;
	}

	function togglePlay() {
		if (!allPlaying) {
			const audios = document.querySelectorAll('audio');
			audios.forEach((audio) => {
				audio.play();
			});
		} else {
			const audios = document.querySelectorAll('audio');
			audios.forEach((audio) => {
				audio.pause();
			});
		}
		allPlaying = !allPlaying;
	}

	function toggleLoop() {
		looping = !looping;
		const audios = document.querySelectorAll('audio');
		audios.forEach((audio) => {
			audio.loop = looping;
		});
	}
</script>

<svelte:head>
	<title>Grace Kelly</title>
</svelte:head>

<main class="container mx-auto px-4">
	{#await songData}
		<h2>LOADING ...</h2>
	{:then songData}
		<h1>{songData.artist} - {songData.song_title}</h1>
		<button
			class="bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
			on:click={togglePlay}>{allPlaying ? 'PAUSE' : 'PLAY'}</button
		>

		<button
			class="uppercase bg-yellow-400 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
			on:click={playFromStart}>REWIND</button
		>

		<button
			class="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
			on:click={() => (allMuted = !allMuted)}>MUTE</button
		>

		<button
			disabled
			class="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
			on:click={toggleLoop}>{looping ? 'LOOPING' : 'LOOP'}</button
		>

		<hr class="my-4" />
		<section class="flex flex-col gap-2">
			{#if songData.voicings.length}
				{#each songData.voicings as voice}
					<AudioPlayer src={voice.audio} muted={allMuted} name={voice.name} paused={!allPlaying} />
				{/each}
			{/if}
		</section>
	{/await}
</main>
