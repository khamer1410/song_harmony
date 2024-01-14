import { getAllSongs } from "@/lib/cms";
import { error } from "@sveltejs/kit";

export async function load({params}) {
  const allSongs = await getAllSongs()

  const song = allSongs.find(song => song.route_name === params.songName)
  console.log(song)

  if (!song) throw error(404)

  return {
    song
  }
}