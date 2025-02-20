import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './data/schemas/schema';
import { resolvers } from './data/resolvers/resolver';
import 'dotenv/config';
import passport from './passport';
import { User } from './types';
import initializeData from './data/mockData'; // Import testData
import { IncomingMessage } from 'http';

interface MyContext {
  user?: User | null;
}

const server = new ApolloServer<MyContext>({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  context: async ({ req }: { req: IncomingMessage }) => {
    return new Promise<MyContext>((resolve, reject) => {
      passport.authenticate(
        'jwt',
        { session: false },
        (err: Error | null, user: User | null) => {
          if (err) {
            reject(err);
          } else {
            resolve({ user });
          }
        }
      )(req);
    });
  },
  listen: { port: 4000 },
}).then(({ url }) => console.log(`🚀 Server ready at ${url}`));

initializeData();
