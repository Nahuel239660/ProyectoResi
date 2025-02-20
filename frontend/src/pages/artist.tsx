import React, { useContext, useState } from 'react';
import { useQuery } from '@apollo/client';
import Layout from '../components/Layout/Layout';
import Seo from '../components/Seo';
import ArtistSongModal from '../components/ArtistSongModal/ArtistSongsModal';
import AddArtistModal from '../components/AddArtistModal/AddArtistModal';
import { GetAllArtistsDocument, Artist } from '../generated/graphql';
import { ArtistsPageContainer } from './styles/Artist.styled';
import { TokenContext } from '../context/TokenContext';
import LoginPage from '../components/Login/Login';

const ArtistsPage: React.FC = () => {
  const { token } = useContext(TokenContext);

  if (!token) {
    return <LoginPage />;
  }

  const { data, loading, error } = useQuery(GetAllArtistsDocument);
  const [selectedArtistId, setSelectedArtistId] = useState<string | null>(null);
  const [isAddArtistModalOpen, setIsAddArtistModalOpen] = useState(false);

  if (loading) return <p>Loading artists...</p>;
  if (error) return <p>Error loading artists: {error.message}</p>;

  return (
    <Layout>
      <Seo title="Artists" />
      <ArtistsPageContainer>
        <h1>Artists</h1>
        <button onClick={() => setIsAddArtistModalOpen(true)}>
          Add Artist
        </button>
        <table>
          <thead>
            <tr>
              <th>Artist Name</th>
              <th>Biography</th>
              <th>Profile</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.getAllArtists?.map((artist: Artist) => (
              <tr key={artist.id}>
                <td>{artist.name}</td>
                <td>{artist.bio || 'Not available'}</td>
                <td>
                  {artist.profileUrl ? (
                    <a href={artist.profileUrl}>View Profile</a>
                  ) : (
                    'No profile'
                  )}
                </td>
                <td>
                  <button onClick={() => setSelectedArtistId(artist.id)}>
                    View Songs
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {selectedArtistId && (
          <ArtistSongModal
            artistId={selectedArtistId}
            onClose={() => setSelectedArtistId(null)}
          />
        )}
        {isAddArtistModalOpen && (
          <AddArtistModal onClose={() => setIsAddArtistModalOpen(false)} />
        )}
      </ArtistsPageContainer>
    </Layout>
  );
};

export default ArtistsPage;
