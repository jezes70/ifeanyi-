import { gql } from 'apollo-server'

const typeDefs = gql`

type Movie{
    id:ID!,
    title: String!,
    image: String!,
    price: Int!,
    description: String!,
}

type Message{
    message:String
}

input CreateMovieInput{
    title: String!
    image: String!
    price: Int!
    description: String!
}

input UpdateMovieInput{
    id:ID!
    title: String
    image: String
    price: Int
    description: String
}

type Query{
 allMovies:[Movie]
 singleMovie(id:ID!):Movie
}

type Mutation{
 createMovie(input:CreateMovieInput!):Movie!
 updateMovie(input:UpdateMovieInput):Movie
 deleteMovie(id:ID!):Message!
}
`

export default typeDefs