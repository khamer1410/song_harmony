<script lang='ts'>
	import type { songOverview } from "./+page.server";

  export let data: { songs: songOverview[]}
  console.log(data);
</script>

<main>
  <h1 class="text-3xl font-bold underline">Welcome to SvelteKit</h1>
  <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

  <navigation class='py-6 block'>
    <h2>Pages: </h2>
    <ul>
      {#each data.songs as {artist, title, url} }
        <li>
          <a
            class="underline text-blue-700 hover:text-blue-400"
            href={`/${url}`}> {artist} : {title}
          </a>
        </li>
      {/each}
    </ul>
  </navigation>

  <h1 class="first-letter:bg-red-600">Hello world!</h1>
</main>
