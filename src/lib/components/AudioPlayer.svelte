<script lang='ts'>
export let src: string;
export let muted: boolean;
export let name: string;
export let paused: boolean;

</script>

<section class="flex gap-2">
	<audio {src} {muted} controls bind:paused={paused}/>
	<h2>{name}</h2>
	<label class="inline-flex items-center cursor-pointer ">
		<input
			type="checkbox"
			class="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out cursor-pointer"
			bind:checked={muted}
		/>
		<span class="ml-2 text-sm leading-5 text-gray-700">{muted ? 'Unmute' : 'Mute'}</span>
	</label>
</section>
