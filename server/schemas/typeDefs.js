const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Multiplication {
        _id: ID
        facts: [Fact]
    }

    type Fact {
        _id: ID
        expression: String
        solution: String
        category: String
        skilled: Boolean
        mastered: Boolean
    }

    `;


module.exports = typeDefs;