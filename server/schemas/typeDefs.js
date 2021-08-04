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

  type Book {
    _id: ID
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  input BookInput {
    _id: ID
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
  }

  type Auth {
    token: ID!
    user: User
  }
  
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(
      bookId: String!
      authors: [String]
      description: String!
      title: String!
      image: String!
      link: String
    ): User
    removeBook(bookId: String): User
  }
`;

module.exports = typeDefs;
