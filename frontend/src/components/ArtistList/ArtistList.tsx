import React, { useState } from 'react';
import ArtistCard from '../ArtistCard/ArtistCard';
import SearchBar from '../SearchBar/SearchBar';
import { Artist, Song } from '../../generated/graphql';
import { ArtistListContainer, FormContainer } from './ArtistList.styled';

interface ArtistListProps {
  artists: Artist[];
  songs: Song[];
}

const ArtistList: React.FC<ArtistListProps> = ({ artists, songs }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredArtists = artists.filter((artist) =>
    artist.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <FormContainer>
      <SearchBar value={searchTerm} onChange={handleSearch} />
      <ArtistListContainer>
        {filteredArtists.length > 0 ? (
          filteredArtists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} songs={songs} />
          ))
        ) : (
          <p>No artists found</p>
        )}
      </ArtistListContainer>
    </FormContainer>
  );
};

export default ArtistList;
