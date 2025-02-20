import React, { useState } from 'react';
import { useMutation, gql, useApolloClient } from '@apollo/client';
import { CreateSongDocument, Artist } from '../../generated/graphql';
import {
  ModalContainer,
  ModalContent,
  FormGroup,
  FormActions,
  SuccessMessage,
} from './AddSongModal.styled';

interface AddSongModalProps {
  onClose: () => void;
  artists: Artist[];
}

const AddSongModal: React.FC<AddSongModalProps> = ({ onClose, artists }) => {
  const [name, setName] = useState('');
  const [albumName, setAlbumName] = useState('');
  const [year, setYear] = useState<number | null>(null);
  const [selectedArtist, setSelectedArtist] = useState('');
  const [message, setMessage] = useState<string | null>(null);

  const [createSong] = useMutation(CreateSongDocument);
  const client = useApolloClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !selectedArtist) {
      setMessage('Name and Artist are required.');
      return;
    }

    try {
      const { data } = await createSong({
        variables: { input: { name, albumName, year, artist: selectedArtist } },
      });

      if (data?.createSong) {
        // Actualiza la caché de Apollo directamente aquí
        client.cache.modify({
          fields: {
            getSongs(existingSongsRefs = []) {
              const newSongRef = client.cache.writeFragment({
                data: data.createSong,
                fragment: gql`
                  fragment NewSong on Song {
                    id
                    name
                    artist {
                      id
                      name
                    }
                    albumName
                    year
                    coverArtUrl
                  }
                `,
              });
              return [...existingSongsRefs, newSongRef];
            },
          },
        });

        setMessage('Song created successfully!');
        setName('');
        setAlbumName('');
        setYear(null);
        setSelectedArtist('');

        // Cierra el modal después de 3 segundos
        setTimeout(() => {
          setMessage(null);
          onClose();
        }, 3000);
      }
    } catch (err) {
      console.error(err);
      setMessage('Error creating song.');
      setTimeout(() => setMessage(null), 3000);
    }
  };

  return (
    <ModalContainer>
      <ModalContent>
        <h2>Add New Song</h2>
        {message && <SuccessMessage>{message}</SuccessMessage>}
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="artist">Artist</label>
            <select
              id="artist"
              value={selectedArtist}
              onChange={(e) => setSelectedArtist(e.target.value)}
              required
            >
              <option value="">Select an artist...</option>
              {artists.map((artist) => (
                <option key={artist.id} value={artist.id}>
                  {artist.name}
                </option>
              ))}
            </select>
          </FormGroup>
          <FormGroup>
            <label htmlFor="albumName">Album Name</label>
            <input
              type="text"
              id="albumName"
              value={albumName}
              onChange={(e) => setAlbumName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="year">Year</label>
            <input
              type="number"
              id="year"
              value={year || ''}
              onChange={(e) => setYear(parseInt(e.target.value))}
            />
          </FormGroup>
          <FormActions>
            <button type="submit" className="btn btn-primary">
              Create Song
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Close
            </button>
          </FormActions>
        </form>
      </ModalContent>
    </ModalContainer>
  );
};

export default AddSongModal;
