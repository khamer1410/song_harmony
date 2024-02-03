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

<div class="breadcrumbs bw text-white">
	<ul>
		<li>
			<a class="link p-4" href="/">👈 Go back</a>
		</li>
		<li>
			<span class="text-white">{song.song_title}</span>
		</li>
	</ul>
</div>

<div class="divider">Song</div>

<h1 class="text-xl font-bold text-center py-4">
	{song.artist} - <br />
	{song.song_title}
</h1>

<section class="flex flex-col gap-4">
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

<section
	class="fixed bg-secondary py-4 bottom-0 left-0 right-0 flex justify-center flex-wrap gap-2"
>
	<!-- TODO: add button component -->
	<button class="btn md bg-primary shadow-lg min-w-[100px]" on:click={togglePlay}
		>{$allPlaying ? 'PAUSE' : 'PLAY'}</button
	>

	<button class="btn md bg-tertiary shadow-lg min-w-[100px]" on:click={playFromStart}>REWIND</button
	>

	<button class="btn md bg-dark info shadow-lg min-w-[100px]" on:click={toggleMute}
		>{$allMuted ? 'UNMUTE' : 'MUTE'}</button
	>

	<button
		disabled
		class="hidden bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-slate-500 min-w-100"
		on:click={toggleLoop}>{$isLooping ? 'LOOPING' : 'LOOP'}</button
	>
</section>
