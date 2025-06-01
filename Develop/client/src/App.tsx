import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import App from './App';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: '/graphql', // GraphQL endpoint
  cache: new InMemoryCache(),
});

// Render the App component wrapped with ApolloProvider
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ApolloProvider client={client}>
{ /* Your main App component */ }
  </ApolloProvider>
);

export default App;
