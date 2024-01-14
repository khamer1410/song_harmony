import { getAllSongs } from "@/lib/cms";

type songOverview = {
  artist: string;
  title: string;
  url: string;
}


export async function load() {
  const allSongs = await getAllSongs()

  return {
    songs: allSongs.map(song => ({
      artist: song.artist,
      title: song.song_title,
      url: song.route_name
    } as songOverview))}
}