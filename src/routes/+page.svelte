<script lang="ts">
	import type { load } from './+page.server';

	export let data: ReturnType<typeof load> extends Promise<infer T> ? T : never;
</script>

<main>
	<h1 class="text-4xl font-bold text-center text-white py-4">Song Voicings</h1>

	<navigation class="py-6 block">
		<h2 class="text-2xl font-semibold py-2 text-white">Pages:</h2>
		<ul class="list-disc space-y-2 pl-5">
			{#each data.songs as { artist, title, url }}
				<li>
					<a class="link text-yellow-300 hover:text-yellow-500" href={`/${url}`}>
						{artist} : {title}
					</a>
				</li>
			{/each}
		</ul>
	</navigation>
</main>
