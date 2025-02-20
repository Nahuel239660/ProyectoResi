import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Seo from '../components/Seo';
import ArtistList from '../components/ArtistList/ArtistList';
import { useQuery } from '@apollo/client';
import { GetAllArtistsDocument, GetSongsDocument } from '../generated/graphql';
import { TokenContext } from '../context/TokenContext';
import { HomeContainer, Content } from './styles/index.styled';

const Home: React.FC = () => {
  const { token } = useContext(TokenContext);
  const navigate = useNavigate();

  // 🔥 Si no hay token, redirigir al login
  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  const {
    loading: artistLoading,
    error: artistError,
    data: artistData,
  } = useQuery(GetAllArtistsDocument);
  const {
    loading: songLoading,
    error: songError,
    data: songData,
  } = useQuery(GetSongsDocument);

  if (artistLoading || songLoading) return <p>Loading...</p>;

  if (artistError || songError) {
    console.error('GraphQL Error:', artistError || songError);
    return <p>Error loading data. Check console for details.</p>;
  }

  return (
    <Layout>
      <Seo title="Home" />
      <HomeContainer>
        <Content>
          <h1>Artist List</h1>
          <ArtistList
            artists={artistData?.getAllArtists || []}
            songs={songData?.getSongs || []}
          />
        </Content>
      </HomeContainer>
    </Layout>
  );
};

export default Home;
