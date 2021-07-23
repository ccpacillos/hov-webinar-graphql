import { gql } from 'apollo-server-koa';

export default gql`
  type Account {
    id: ID!
    name: String!
    email: String!
  }

  type Pet {
    id: ID!
    name: String!
    kind: KIND_OF_PET!
  }

  type Query {
    accounts: [Account!]!
  }

  type Mutation {
    createAccount(input: CreateAccountInput!): Account!
  }

  input CreateAccountInput {
    name: String!
    email: String!
  }

  enum KIND_OF_PET {
    DOG
    CAT
  }
`;
