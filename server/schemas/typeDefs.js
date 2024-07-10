const gql = require('graphql-tag');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    games: [Game]!
  }

  type Game {
    _id: ID!
    player: User!
    currentBoard: String!
    status: GameStatus!
    moves: [Move]!
    aiDifficulty: AIDifficulty!
    createdAt: String!
    updatedAt: String!
  }

  type Move {
    from: String!
    to: String!
    piece: String!
    timestamp: String!
  }

  enum GameStatus {
    IN_PROGRESS
    PLAYER_WON
    AI_WON
    DRAW
  }

  enum AIDifficulty {
    EASY
    MEDIUM
    HARD
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    game(_id: ID!): Game
    myGames: [Game]!
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    createGame(aiDifficulty: AIDifficulty!): Game
    makeMove(gameId: ID!, from: String!, to: String!): Game
  }
`;

module.exports = typeDefs;