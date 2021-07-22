import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

const createApolloClient = (cache = {}) =>
  new ApolloClient({
    ssrMode: typeof window === 'undefined',
    cache: new InMemoryCache().restore(cache),
    link: createUploadLink({ uri: "http://localhost:4000/" }),
  });

const cache = new InMemoryCache();
const client = createApolloClient(cache)

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)