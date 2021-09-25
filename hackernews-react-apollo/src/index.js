// import @apollo/client
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

// create httpLink for connecting apolloclient, graphql server will be running on 'http://localhost:4000'
const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
});

// passing httpLink & InmemoryCache.
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

// passed the data as a prop.
ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
