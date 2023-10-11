<svelte:head>
  <title>{songData.song_title}</title>
</svelte:head>

<script lang='ts'>
	import { getSongHarmony } from "$lib";
	import type { SongHarmony } from "@/@types";
	import { onMount } from "svelte";

  let songData = {} as SongHarmony
  let paused = true
  let muted = false

  onMount(async ()=> {
    const data = await getSongHarmony()
    console.log(data);
    songData = data
  })

  function playFromStart() {
    const audios = document.querySelectorAll('audio')
    audios.forEach(audio => {
      audio.currentTime = 0
    })
    paused = false;
  }

  function pauseAll() {
    const audios = document.querySelectorAll('audio')
    audios.forEach(audio => {
      audio.currentTime = 0
    })
    paused = true
  }
</script>

<!-- TODO: loading state -->
<h1>{songData.artist} - {songData.song_title}</h1>
<button
class="bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
on:click={playFromStart}>PLAY</button>

<button
class="uppercase bg-yellow-400 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
on:click={pauseAll}>REWIND</button>

<button
class="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
on:click={() => muted = !muted}>MUTE</button>

<hr class="my-4">
{#if songData.voicings?.length}
   {#each songData.voicings as voice}
   <!-- TODO: make a component, make mutable -->
     <section class='flex gap-2'>
       <h2>{voice.name}</h2>
       <audio data-testid='audio' src={voice.audio} bind:paused={paused} bind:muted={muted}/>
     </section>
   {/each}
{/if}