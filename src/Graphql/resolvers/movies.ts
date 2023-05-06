import { ApolloError } from "apollo-server-errors";
import { Movie, movieModel } from '../../model/movieModel'
import { creatMovie, updateMovie } from './type'

type UpdateMovieInput = {
    id: string;
    title?: string;
    image?: string;
    price?: number;
    description?: string;
};

type CreateMovieInput = {
    title?: string;
    image?: string;
    price?: number;
    description?: string;
};

const movieResolver = {
    Query: {
        allMovies: async () => {
            try {
                const movies = await Movie.find();
                return movies;
            } catch (err) {
                console.log(err);
                throw new ApolloError("Failed to fetch movies.");
            }
        },
    },
    Mutation: {
        createMovie: async (
            _: unknown,
            { input }: { input: CreateMovieInput }
        ) => {
            try {
                const { title, image, price, description } = input;
                if (!title || !image || !price || !description) {
                    throw new Error("Missing required field(s)");
                }

                const newMovie = {
                    title,
                    image,
                    price,
                    description,
                };

                const movie = await Movie.create(newMovie);
                return movie;
            } catch (err) {
                console.log(err);
                throw new ApolloError("Failed to create movie.");
            }
        },

        updateMovie: async (
            _: unknown,
            { input }: { input: UpdateMovieInput }
        ) => {
            try {
                const { id, title, image, price, description } = input;
                const updateMovie = {
                    title,
                    image,
                    price,
                    description,
                };

                const updatedMovie = await Movie.findByIdAndUpdate(
                    id,
                    updateMovie,
                    { new: true }
                );

                if (!updatedMovie) {
                    throw new ApolloError("Movie not found.");
                }

                return updatedMovie;
            } catch (err) {
                console.log(err);
                throw new ApolloError("Failed to update movie.");
            }
        },

        deleteMovie: async (_: unknown, { id }: { id: string }) => {
            try {
                const movie = await Movie.findByIdAndDelete(id);
                if (!movie) {
                    throw new ApolloError("Movie not found.");
                }

                return {
                    message: "Movie deleted successfully"
                }
            } catch (err) {
                console.log(err);
                throw new ApolloError("Failed to delete movie.");
            }
        },
    },
};

export default movieResolver;