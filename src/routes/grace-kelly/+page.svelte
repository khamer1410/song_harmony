<svelte:head>
  <title>Grace Kelly</title>
</svelte:head>

<script lang='ts'>
	import { getSongHarmony } from "$lib";
	import type { SongHarmony } from "@/@types";
	import { onMount } from "svelte";

  let songData = {} as SongHarmony
  let paused = true

  onMount(async ()=> {
    const data = await getSongHarmony()
    console.log(data);
    songData = data
  })
</script>

<!-- TODO: loading state -->
<h1>{songData.artist} - {songData.song_title}</h1>

{#if songData.voicings?.length}
   {#each songData.voicings as voice}
   <!-- TODO: make a component -->
     <section class='flex'>
       <h2>{voice.name}</h2>
       <button on:click={() => paused = !paused}>PLAY</button>
       <audio src={voice.audio} bind:paused={paused}/>
     </section>
   {/each}
{/if}
