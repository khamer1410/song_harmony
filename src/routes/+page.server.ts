import { getAllSongs } from "@/lib/cms";

export type songOverview = {
  artist: string;
  title: string;
  url: string;
}


export async function load() : Promise<{songs: songOverview[]}> {
  const allSongs = await getAllSongs()

  console.log(allSongs)

  return {
    songs: allSongs.map(song => ({
      artist: song.artist,
      title: song.song_title,
      url: song.route_name
    }))}
}