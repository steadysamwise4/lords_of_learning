const express = require('express');
require('dotenv').config()
const { authMiddleware } = require('./utils/auth');

const path = require('path');
const { ApolloServer } = require('apollo-server-express');

const db = require('./config/connection');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');


const PORT = process.env.PORT || 3009;
const app = express();

const startServer = async () => {
    // create a new Apollo server and pass in our schema data
    const server = new ApolloServer({ 
      typeDefs, 
      resolvers, 
      context: authMiddleware 
    });


    await server.start();

    server.applyMiddleware({ app });
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
};

startServer();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });