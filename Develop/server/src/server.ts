import express from 'express';
import path from 'node:path';
import db from './config/connection.js';
import routes from './routes/index.js';

const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const { typeDefs, resolvers } = require('./schemas');

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });
// Start the Apollo server
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
