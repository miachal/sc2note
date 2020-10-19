import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './style/global';

import AppLoader from './components/AppLoader';
import { routes } from './routing';

const client = new ApolloClient({
  cache: new InMemoryCache({
    addTypename: false,
  }),
  link: new HttpLink({
    uri: 'http://localhost:4000/graphql',
  }),
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <ApolloProvider client={client}>
        <AppLoader routes={routes} />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
