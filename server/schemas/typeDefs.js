// import the qgl tagged template function
const { gql } = require("apollo-server-express");

// create the typeDefs
const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
}

input Book {
    _id: ID
    bookId: Int
    authors: String
    description: String
    title: String
    image: String
    link: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    me: User
}

typeMutation {
   login(email: String!, password: String!) : Auth
   addUser(username: String!, email: String!, password: String!): Auth
   saveBook(bookId: Int!, authors: String!, description: String!, title: String!, image: String!, link: String!): User
   removeBook(bookId: Int!): User
}
`;

module.exports = typeDefs;
