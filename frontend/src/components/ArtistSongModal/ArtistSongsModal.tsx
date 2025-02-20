import React, { useState } from 'react';
import { useLazyQuery, useMutation, useApolloClient } from '@apollo/client';
import {
  GetSongsDocument,
  DeleteSongDocument,
  Song,
} from '../../generated/graphql';
import {
  Modal,
  ModalContent,
  SongList,
  SuccessMessage,
  ModalActions,
} from './ArtistSongModal.styled';

interface ArtistSongModalProps {
  artistId: string;
  onClose: () => void;
}

const ArtistSongModal: React.FC<ArtistSongModalProps> = ({
  artistId,
  onClose,
}) => {
  const [getSongs, { data, loading, error }] = useLazyQuery(GetSongsDocument, {
    variables: { artist: artistId },
    fetchPolicy: 'network-only', // Para evitar datos en caché desactualizados
  });
  const [deleteSong] = useMutation(DeleteSongDocument);
  const [message, setMessage] = useState<string | null>(null);

  const client = useApolloClient();

  // Cargar canciones solo cuando se abre el modal
  React.useEffect(() => {
    getSongs();
  }, [getSongs]);

  const handleDeleteSong = async (songId: string) => {
    try {
      await deleteSong({ variables: { id: songId } });

      // Actualizar la caché manualmente después de eliminar una canción
      client.cache.modify({
        fields: {
          getSongs(existingSongsRefs = [], { readField }) {
            return existingSongsRefs.filter(
              (songRef: any) => readField('id', songRef) !== songId
            );
          },
        },
      });

      setMessage('Song deleted successfully!');
    } catch {
      setMessage('Error deleting song.');
    }

    setTimeout(() => {
      setMessage(null);
    }, 3000);
  };

  return (
    <Modal>
      <ModalContent>
        <h2>Artist&apos;s Songs</h2>
        {loading && <p>Loading songs...</p>}
        {error && <p>Error loading songs: {error.message}</p>}
        {message && <SuccessMessage>{message}</SuccessMessage>}
        {data?.getSongs && (
          <SongList>
            {data.getSongs.map((song: Song) => (
              <li key={song.id} className="song-item">
                <span className="song-name">
                  {song.name} ({song.year || 'Year unknown'})
                </span>
                <button
                  className="delete-button"
                  onClick={() => handleDeleteSong(song.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </SongList>
        )}
        <ModalActions>
          <button onClick={onClose} className="close-button">
            Close
          </button>
        </ModalActions>
      </ModalContent>
    </Modal>
  );
};

export default ArtistSongModal;
