import React, { useState } from 'react';
import { useQuery, useMutation, useApolloClient } from '@apollo/client';
import {
  GetSongsDocument,
  DeleteSongDocument,
  GetAllArtistsDocument,
  Song,
  Artist,
} from '../generated/graphql';
import Layout from '../components/Layout/Layout';
import Seo from '../components/Seo';
import { SongsPageContainer } from './styles/Song.styled';
import AddSongModal from '../components/AddSongModal/AddSongModal';

const SongsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState<'ASC' | 'DESC'>('ASC');
  const [selectedArtist, setSelectedArtist] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, loading, error } = useQuery(GetSongsDocument);
  const { data: artistsData, loading: artistsLoading } = useQuery(
    GetAllArtistsDocument
  );
  const [deleteSong] = useMutation(DeleteSongDocument);
  const client = useApolloClient();

  // Función para obtener canciones filtradas y ordenadas
  const getFilteredSongs = () => {
    if (!data?.getSongs) return [];

    let songs = [...data.getSongs];

    if (selectedArtist) {
      songs = songs.filter((song) => song.artist.id === selectedArtist);
    }

    if (searchTerm) {
      songs = songs.filter((song) =>
        song.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    songs.sort((a, b) =>
      sortOrder === 'ASC'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

    return songs;
  };

  // Función para eliminar una canción
  const handleDeleteSong = async (songId: string) => {
    try {
      await deleteSong({ variables: { id: songId } });

      // Actualiza la caché de Apollo después de eliminar la canción
      client.cache.modify({
        fields: {
          getSongs(existingSongs = [], { readField }) {
            return existingSongs.filter(
              (songRef: any) => readField('id', songRef) !== songId
            );
          },
        },
      });
    } catch (err) {
      console.error('Error deleting song:', err);
    }
  };

  if (loading || artistsLoading) return <p>Loading songs and artists...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  return (
    <Layout>
      <Seo title="Songs" />
      <SongsPageContainer>
        <h1>Songs</h1>
        <div className="filters">
          <input
            type="text"
            placeholder="Search songs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="sort-order">
            <label>
              <input
                type="radio"
                value="ASC"
                checked={sortOrder === 'ASC'}
                onChange={() => setSortOrder('ASC')}
              />
              Ascending
            </label>
            <label>
              <input
                type="radio"
                value="DESC"
                checked={sortOrder === 'DESC'}
                onChange={() => setSortOrder('DESC')}
              />
              Descending
            </label>
          </div>
          <select
            value={selectedArtist || ''}
            onChange={(e) => setSelectedArtist(e.target.value)}
          >
            <option value="">All Artists</option>
            {artistsData?.getAllArtists?.map((artist: Artist) => (
              <option key={artist.id} value={artist.id}>
                {artist.name}
              </option>
            ))}
          </select>
          <button onClick={() => setIsModalOpen(true)}>Add Song</button>
        </div>
        <table className="songs-table">
          <thead>
            <tr>
              <th>Song Name</th>
              <th>Artist</th>
              <th>Album</th>
              <th>Year</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {getFilteredSongs().map((song: Song) => (
              <tr key={song.id}>
                <td>{song.name}</td>
                <td>{song.artist.name}</td>
                <td>{song.albumName || 'Unknown'}</td>
                <td>{song.year || 'Unknown'}</td>
                <td>
                  <button
                    className="delete-button"
                    onClick={() => handleDeleteSong(song.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {isModalOpen && (
          <AddSongModal
            onClose={() => setIsModalOpen(false)}
            artists={artistsData?.getAllArtists || []}
          />
        )}
      </SongsPageContainer>
    </Layout>
  );
};

export default SongsPage;
