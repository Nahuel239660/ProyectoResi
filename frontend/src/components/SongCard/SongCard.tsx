import React from 'react';
import { Song } from '../../generated/graphql';
import { CardContainer } from './SongCard.styled';

interface SongCardProps {
  song: Song;
}

const SongCard: React.FC<SongCardProps> = ({ song }) => {
  return (
    <CardContainer>
      <h3 aria-label={`Song: ${song.name}`}>{song.name}</h3>
      <p>Year: {song.year || 'Unknown'}</p>
    </CardContainer>
  );
};

export default SongCard;
