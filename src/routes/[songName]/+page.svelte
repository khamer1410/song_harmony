<script lang="ts">
	import { AudioPlayer } from '@/lib/components';
	import {
		toggleLoop,
		toggleMute,
		togglePlay,
		allPlaying,
		playFromStart,
		isLooping,
		allMuted
	} from '@/lib/utils/playerControls';

	export let data;
	let { song } = data;
</script>

<svelte:head>
	<title>{song.song_title}</title>
</svelte:head>

<main class="container mx-auto px-4">
	<button
		class="bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
		on:click={togglePlay}>{$allPlaying ? 'PAUSE' : 'PLAY'}</button
	>

	<button
		class="uppercase bg-yellow-400 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
		on:click={playFromStart}>REWIND</button
	>

	<button
		class="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
		on:click={toggleMute}>{$allMuted ? 'UNMUTE' : 'MUTE'}</button
	>

	<button
		disabled
		class="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
		on:click={toggleLoop}>{$isLooping ? 'LOOPING' : 'LOOP'}</button
	>
	<h1>{song.artist} - {song.song_title}</h1>

	<hr class="my-4" />
	<section class="flex flex-col gap-2">
		{#if song.voicings.length}
			{#each song.voicings as voice}
				<AudioPlayer
					src={voice.audio}
					playing={$allPlaying}
					muted={$allMuted}
					name={voice.name}
					looping={$isLooping}
				/>
			{/each}
		{/if}
	</section>
</main>
