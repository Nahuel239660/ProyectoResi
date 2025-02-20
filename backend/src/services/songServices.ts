import { Song, SongInput, QueryGetSongsArgs } from '../generated/graphql';
import { fetchArtistById } from './artistApi';

const songs: Song[] = [];

export const getSongs = (filters: Partial<QueryGetSongsArgs>): Song[] => {
  return songs
    .filter(
      (song) =>
        (filters.artist ? song.artist?.id === filters.artist : true) &&
        (filters.name ? song.name.includes(filters.name) : true) &&
        (filters.year !== undefined ? song.year === filters.year : true)
    )
    .sort((a, b) => {
      const yearA = a.year ?? 0;
      const yearB = b.year ?? 0;

      if (filters.sort === 'DESC') {
        return yearB - yearA;
      } else {
        return yearA - yearB;
      }
    });
};

export const getSongById = (id: string): Song | null => {
  return songs.find((song) => song.id === id) || null;
};

export const addSong = async (input: SongInput): Promise<Song> => {
  const artistId = input.artist ?? '';
  const artist = await fetchArtistById(artistId);
  if (!artist) {
    throw new Error('Artist not found');
  }

  const newSong: Song = {
    id: `${songs.length + 1}`,
    name: input.name,
    artist: artist,
    albumName: input.albumName,
    year: input.year,
    coverArtUrl: input.coverArtUrl,
  };

  songs.push(newSong);
  return newSong;
};

export const updateSong = async (
  id: string,
  input: SongInput
): Promise<Song | null> => {
  const index = songs.findIndex((song) => song.id === id);
  if (index === -1) return null;

  const existingArtist = songs[index].artist;
  const artist = input.artist
    ? await fetchArtistById(input.artist)
    : existingArtist;

  if (input.artist && !artist) {
    throw new Error('Artist not found');
  }

  const updatedSong: Song = {
    ...songs[index],
    ...input,
    artist: artist ?? existingArtist,
  };

  songs[index] = updatedSong;
  return updatedSong;
};

export const deleteSong = (id: string): Song | null => {
  const index = songs.findIndex((song) => song.id === id);
  if (index === -1) return null;

  const [deletedSong] = songs.splice(index, 1);
  return deletedSong;
};
