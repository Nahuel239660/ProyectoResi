import React, { useContext } from 'react';
import { TokenContext } from './TokenContext';
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

export const ApolloClientContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { token } = useContext(TokenContext);

  const httpLink = createHttpLink({
    uri: 'http://localhost:4000/graphql', // Cambia esto si el backend tiene otra URL
  });

  const authLink = setContext((_, { headers }) => ({
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }));

  const client = new ApolloClient({
    link: ApolloLink.from([authLink, httpLink]),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
