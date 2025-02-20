import { gql } from 'graphql-tag';

export const typeDefs = gql`
  type Artist {
    id: ID!
    name: String!
    profileUrl: String
    bio: String
  }

  type Song {
    id: ID!
    name: String!
    artist: Artist!
    albumName: String
    year: Int
    coverArtUrl: String
  }

  input SongInput {
    name: String!
    artist: ID!
    albumName: String
    year: Int
    coverArtUrl: String
  }

  type Query {
    Song(id: ID!): Song
    getSongs(artist: ID, name: String, year: Int, sort: String): [Song]
    getArtist(id: ID!): Artist
    getAllArtists: [Artist]
  }

  type Mutation {
    authenticate(username: String!, password: String!): AuthPayload
    createArtist(name: String!, profileUrl: String, bio: String): Artist
    createSong(input: SongInput!): Song
    updateSong(id: ID!, input: SongInput!): Song
    deleteSong(id: ID!): Song
  }

  type AuthPayload {
    token: String!
  }
`;
