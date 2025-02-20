import axios from 'axios';
import { Artist } from '../generated/graphql';

const API_URL = 'http://localhost:3001/artists';

export const fetchAllArtists = async (): Promise<Artist[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const fetchArtistById = async (id: string): Promise<Artist | null> => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const createArtist = async (
  name: string,
  profileUrl: string,
  bio: string
): Promise<Artist> => {
  const response = await axios.post(API_URL, { name, profileUrl, bio });
  return response.data;
};
