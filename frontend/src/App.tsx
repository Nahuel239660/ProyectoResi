import { TokenContextProvider } from './context/TokenContext';
import { ApolloClientContextProvider } from './context/ApolloClientContext';
import AppRouter from './router';
import React from 'react';

function App() {
  return (
    <TokenContextProvider>
      <ApolloClientContextProvider>
        <AppRouter />
      </ApolloClientContextProvider>
    </TokenContextProvider>
  );
}

export default App;
