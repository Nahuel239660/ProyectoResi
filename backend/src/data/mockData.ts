import { createArtist } from '../services/artistApi';
import { addSong } from '../services/songServices';

const initializeData = async () => {
  const artistsData = [
    {
      name: 'Artist One',
      profileUrl: 'https://example.com/artist_one.jpg',
      bio: 'This is the bio for Artist One.',
    },
    {
      name: 'Artist Two',
      profileUrl: 'https://example.com/artist_two.jpg',
      bio: 'This is the bio for Artist Two.',
    },
    {
      name: 'Artist Three',
      profileUrl: 'https://example.com/artist_three.jpg',
      bio: 'This is the bio for Artist Three.',
    },
    {
      name: 'Artist Four',
      profileUrl: 'https://example.com/artist_four.jpg',
      bio: 'This is the bio for Artist Four.',
    },
    {
      name: 'Artist Five',
      profileUrl: 'https://example.com/artist_five.jpg',
      bio: 'This is the bio for Artist Five.',
    },
    {
      name: 'Artist Six',
      profileUrl: 'https://example.com/artist_six.jpg',
      bio: 'This is the bio for Artist Six.',
    },
    {
      name: 'Artist Seven',
      profileUrl: 'https://example.com/artist_seven.jpg',
      bio: 'This is the bio for Artist Seven.',
    },
    {
      name: 'Artist Eight',
      profileUrl: 'https://example.com/artist_eight.jpg',
      bio: 'This is the bio for Artist Eight.',
    },
    {
      name: 'Artist Nine',
      profileUrl: 'https://example.com/artist_nine.jpg',
      bio: 'This is the bio for Artist Nine.',
    },
    {
      name: 'Artist Ten',
      profileUrl: 'https://example.com/artist_ten.jpg',
      bio: 'This is the bio for Artist Ten.',
    },
  ];

  const songsData = [
    [
      { name: 'Song A1', year: 2020 },
      { name: 'Song A2', year: 2021 },
      { name: 'Song A3', year: 2022 },
    ],
    [
      { name: 'Song B1', year: 2019 },
      { name: 'Song B2', year: 2020 },
      { name: 'Song B3', year: 2021 },
    ],
    [
      { name: 'Song C1', year: 2018 },
      { name: 'Song C2', year: 2019 },
      { name: 'Song C3', year: 2020 },
    ],
    [
      { name: 'Song D1', year: 2021 },
      { name: 'Song D2', year: 2022 },
      { name: 'Song D3', year: 2023 },
    ],
    [
      { name: 'Song E1', year: 2020 },
      { name: 'Song E2', year: 2021 },
      { name: 'Song E3', year: 2022 },
    ],
    [
      { name: 'Song F1', year: 2022 },
      { name: 'Song F2', year: 2023 },
      { name: 'Song F3', year: 2024 },
    ],
    [
      { name: 'Song G1', year: 2021 },
      { name: 'Song G2', year: 2022 },
      { name: 'Song G3', year: 2023 },
    ],
    [
      { name: 'Song H1', year: 2020 },
      { name: 'Song H2', year: 2021 },
      { name: 'Song H3', year: 2022 },
    ],
    [
      { name: 'Song I1', year: 2019 },
      { name: 'Song I2', year: 2020 },
      { name: 'Song I3', year: 2021 },
    ],
    [
      { name: 'Song J1', year: 2022 },
      { name: 'Song J2', year: 2023 },
      { name: 'Song J3', year: 2024 },
    ],
  ];

  for (let i = 0; i < artistsData.length; i++) {
    const artistData = artistsData[i];
    const artist = await createArtist(
      artistData.name,
      artistData.profileUrl,
      artistData.bio
    );

    for (const song of songsData[i]) {
      addSong({
        name: song.name,
        artist: artist.id,
        albumName: `${artist.name} - Album ${song.year}`,
        year: song.year,
        coverArtUrl: '',
      });
    }
  }
};
export default initializeData;
