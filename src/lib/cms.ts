import type { SongHarmony } from '@/@types/song';
import ButterCMS from 'buttercms';

const butterProvider = ButterCMS('4c70e6ea4d3f7b58e11a604674c85560940af298')

const CMS_DICTIONARY = {
  songHarmony: 'song_harmony',
} as const

export const getSongHarmony = async () => {
  const response = await butterProvider.content.retrieve([CMS_DICTIONARY.songHarmony])
  const [song] = response.data?.data.song_harmony || [];

  return song as SongHarmony
}