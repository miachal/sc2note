import React from 'react';
import { ApolloProvider, ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { Navbar } from './Navbar';
import GlobalStyle from './style/global';

const client = new ApolloClient({
  cache: new InMemoryCache({
    addTypename: false
  }),
  link: new HttpLink({
    uri: 'http://localhost:4000/graphql'
  })
});

const App = () => (
  <>
    <GlobalStyle />
    <ApolloProvider client={client}>
      <Navbar />
    </ApolloProvider>
  </>
);

export default App;
