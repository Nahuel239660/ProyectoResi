import React from 'react';
import SongCard from '../SongCard/SongCard';
import { Artist, Song } from '../../generated/graphql';

interface ArtistCardProps {
  artist: Artist;
  songs: Song[];
}

const ArtistCard: React.FC<ArtistCardProps> = ({ artist, songs }) => {
  // Filtramos las canciones del artista directamente en el padre
  const artistSongs = songs.filter((song) => song.artist.id === artist.id);

  return (
    <div className="artist-card">
      <h2>{artist.name}</h2>
      <p>{artist.bio}</p>
      <div className="song-list">
        {artistSongs.length > 0 ? (
          artistSongs.map((song) => <SongCard key={song.id} song={song} />)
        ) : (
          <p>No songs available for this artist.</p>
        )}
      </div>
    </div>
  );
};

export default ArtistCard;
