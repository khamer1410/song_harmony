// eslint-disable-next-line prefer-const
export let allMuted = false;
export let allPlaying = false;
export let looping = false;

export function playFromStart() {
  const audios = document.querySelectorAll('audio');
  audios.forEach((audio) => {
    audio.currentTime = 0;
    audio.play();
  });
  allPlaying = true;
}

export function togglePlay() {
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

export function toggleLoop() {
  looping = !looping;
  const audios = document.querySelectorAll('audio');
  audios.forEach((audio) => {
    audio.loop = looping;
  });
}