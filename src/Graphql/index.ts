import movieResovlver from "./resolvers/movies"

export default {
    Query: {
        ...movieResovlver.Query
    },

    Mutation: {
        ...movieResovlver.Mutation
    }
}