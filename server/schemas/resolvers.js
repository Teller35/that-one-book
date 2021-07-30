// import dependices for resolvers to work
const { User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

// create the resolvers
const resolvers = {
    Query: {
        
    },
    Mutation: {

    }
}

module.exports = resolvers;
