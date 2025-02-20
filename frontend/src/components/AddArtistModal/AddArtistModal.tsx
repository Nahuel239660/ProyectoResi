import React, { useState } from 'react';
import { useMutation, useApolloClient } from '@apollo/client';
import {
  CreateArtistDocument,
  Artist,
  NewArtistFragmentDoc,
} from '../../generated/graphql';
import {
  ModalContainer,
  ModalContent,
  FormGroup,
  FormActions,
  SuccessMessage,
} from './AddArtistModal.styled';

interface AddArtistModalProps {
  onClose: () => void;
}

const AddArtistModal: React.FC<AddArtistModalProps> = ({ onClose }) => {
  const [name, setName] = useState('');
  const [profileUrl, setProfileUrl] = useState('');
  const [bio, setBio] = useState('');
  const [message, setMessage] = useState<string | null>(null);

  const [createArtist] = useMutation(CreateArtistDocument);
  const client = useApolloClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name) {
      setMessage('Name is required.');
      return;
    }

    try {
      const { data } = await createArtist({
        variables: { name, profileUrl, bio },
      });

      if (data?.createArtist) {
        // Actualiza la caché de Apollo directamente aquí
        client.cache.modify({
          fields: {
            getAllArtists(existingArtistsRefs = []) {
              const newArtistRef = client.cache.writeFragment<Artist>({
                data: data.createArtist,
                fragment: NewArtistFragmentDoc,
              });
              return [...existingArtistsRefs, newArtistRef];
            },
          },
        });
        setMessage('Artist created successfully!');
        setName('');
        setProfileUrl('');
        setBio('');
      }
    } catch (err: any) {
      if (err.message.includes('duplicate')) {
        setMessage('An artist with this name already exists.');
      } else {
        setMessage('Error creating artist.');
      }
    }

    setTimeout(() => {
      setMessage(null);
    }, 3000);
  };

  return (
    <ModalContainer>
      <ModalContent>
        <h2>Add New Artist</h2>
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
            <label htmlFor="profileUrl">Profile URL</label>
            <input
              type="text"
              id="profileUrl"
              value={profileUrl}
              onChange={(e) => setProfileUrl(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="bio">Biography</label>
            <textarea
              id="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </FormGroup>
          <FormActions>
            <button type="submit" className="btn-primary">
              Create Artist
            </button>
            <button type="button" className="btn-secondary" onClick={onClose}>
              Close
            </button>
          </FormActions>
        </form>
      </ModalContent>
    </ModalContainer>
  );
};

export default AddArtistModal;
