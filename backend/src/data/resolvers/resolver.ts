import { Resolvers } from '../../generated/graphql';
import { Context } from '../../types';
import jwt from 'jsonwebtoken';
import {
  getSongs,
  getSongById,
  addSong,
  updateSong,
  deleteSong,
} from '../../services/songServices';
import {
  fetchArtistById,
  fetchAllArtists,
  createArtist,
} from '../../services/artistApi';
import { getUserByUsername } from '../../services/userServices';
import ac from '../../services/roles';
import { GraphQLError } from 'graphql';

export const resolvers: Resolvers<Context> = {
  Query: {
    Song: (_parent, { id }, context) => {
      if (!context.user) {
        throw new GraphQLError('Not authenticated', {
          extensions: { code: 'UNAUTHENTICATED' },
        });
      }

      const permission = ac.can(context.user.role).readAny('song');
      if (!permission.granted) {
        throw new GraphQLError('Access denied', {
          extensions: { code: 'FORBIDDEN' },
        });
      }

      const song = getSongById(id);
      if (!song) {
        throw new GraphQLError('Song not found', {
          extensions: { code: 'NOT_FOUND' },
        });
      }
      return song;
    },

    getSongs: (_parent, args, context) => {
      if (!context.user) {
        throw new GraphQLError('Not authenticated', {
          extensions: { code: 'UNAUTHENTICATED' },
        });
      }

      const permission = ac.can(context.user.role).readAny('song');
      if (!permission.granted) {
        throw new GraphQLError('Access denied', {
          extensions: { code: 'FORBIDDEN' },
        });
      }

      return getSongs(args);
    },

    getArtist: async (_parent, { id }, context) => {
      if (!context.user) {
        throw new GraphQLError('Not authenticated', {
          extensions: { code: 'UNAUTHENTICATED' },
        });
      }

      const permission = ac.can(context.user.role).readAny('artist');
      if (!permission.granted) {
        throw new GraphQLError('Access denied', {
          extensions: { code: 'FORBIDDEN' },
        });
      }

      const artist = await fetchArtistById(id);
      if (!artist) {
        throw new GraphQLError('Artist not found', {
          extensions: { code: 'NOT_FOUND' },
        });
      }
      return artist;
    },

    getAllArtists: async (_parent, args, context) => {
      if (!context.user) {
        throw new GraphQLError('Not authenticated', {
          extensions: { code: 'UNAUTHENTICATED' },
        });
      }

      const permission = ac.can(context.user.role).readAny('artist');
      if (!permission.granted) {
        throw new GraphQLError('Access denied', {
          extensions: { code: 'FORBIDDEN' },
        });
      }

      return await fetchAllArtists();
    },
  },

  Mutation: {
    authenticate: (_parent, { username, password }) => {
      const user = getUserByUsername(username);

      if (!user || user.password !== password) {
        throw new GraphQLError('Invalid credentials', {
          extensions: { code: 'INVALID_CREDENTIALS' },
        });
      }

      const JWT_SECRET = process.env.JWT_SECRET;
      if (!JWT_SECRET) {
        throw new GraphQLError(
          'JWT_SECRET is not defined in the environment variables',
          {
            extensions: { code: 'INTERNAL_SERVER_ERROR' },
          }
        );
      }

      const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, {
        expiresIn: '1h',
      });

      return { token };
    },

    createArtist: async (_parent, { name, profileUrl, bio }, context) => {
      if (!context.user) {
        throw new GraphQLError('Not authenticated', {
          extensions: { code: 'UNAUTHENTICATED' },
        });
      }

      const permission = ac.can(context.user.role).createAny('artist');
      if (!permission.granted) {
        throw new GraphQLError('Access denied', {
          extensions: { code: 'FORBIDDEN' },
        });
      }

      return await createArtist(name, profileUrl ?? ' ', bio ?? ' ');
    },

    createSong: (_parent, { input }, context) => {
      if (!context.user) {
        throw new GraphQLError('Not authenticated', {
          extensions: { code: 'UNAUTHENTICATED' },
        });
      }

      const permission = ac.can(context.user.role).createOwn('song');
      if (!permission.granted) {
        throw new GraphQLError('Access denied', {
          extensions: { code: 'FORBIDDEN' },
        });
      }
      if (!input.artist || !input.name) {
        throw new GraphQLError('Required fields are missing', {
          extensions: { code: 'BAD_USER_INPUT' },
        });
      }
      return addSong(input);
    },

    updateSong: (_parent, { id, input }, context) => {
      if (!context.user) {
        throw new GraphQLError('Not authenticated', {
          extensions: { code: 'UNAUTHENTICATED' },
        });
      }

      const permission = ac.can(context.user.role).updateAny('song');
      if (!permission.granted) {
        throw new GraphQLError('Access denied', {
          extensions: { code: 'FORBIDDEN' },
        });
      }

      return updateSong(id, input);
    },

    deleteSong: (_parent, { id }, context) => {
      if (!context.user) {
        throw new GraphQLError('Not authenticated', {
          extensions: { code: 'UNAUTHENTICATED' },
        });
      }

      const permission = ac.can(context.user.role).deleteAny('song');
      if (!permission.granted) {
        throw new GraphQLError('Access denied', {
          extensions: { code: 'FORBIDDEN' },
        });
      }

      return deleteSong(id);
    },
  },

  Song: {
    artist: async (song) => {
      if (!song.artist || !song.artist.id) {
        throw new GraphQLError('Artist not found', {
          extensions: { code: 'NOT_FOUND' },
        });
      }

      // Suponiendo que fetchArtistById es una función que hace una llamada a la API y devuelve un Artist o lanza un error si no se encuentra
      const artist = await fetchArtistById(song.artist.id);

      if (!artist) {
        throw new GraphQLError('Artist not found', {
          extensions: { code: 'NOT_FOUND' },
        });
      }

      return artist;
    },
  },
};
