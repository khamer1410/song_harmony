
type AudioMedia = string;
type Artist = string;

export interface SongHarmony {
  artist: Artist;
  background_image: string;
  song_title: string;
  lyrics: string;
  voicings: Voicing[];
}

interface Voicing {
  name: string;
  audio: AudioMedia
}