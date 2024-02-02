import { writable } from 'svelte/store';

export const allMuted = writable(false);
export const allPlaying = writable(false);
export const isLooping = writable(false); // TODO: fix loop desync

export function playFromStart() {
	const audios = document.querySelectorAll('audio');
	audios.forEach((audio) => {
		audio.currentTime = 0;
		audio.play();
	});
	allPlaying.set(true);
}

export function togglePlay() {
	allPlaying.update((value) => !value);
}

export function toggleLoop() {
	isLooping.update((value) => !value);
}

export function toggleMute() {
	allMuted.update((value) => !value);
}
