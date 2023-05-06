import mongoose, { Schema, model } from "mongoose"

export interface movieModel {
    title: string,
    image: string,
    price: number,
    description: string,
}

interface UserDocument extends Document {
    fullname: string;
    username: string;
    email: string;
    password: string;
    movies: movieModel[];
}

const movieModelSchema = new mongoose.Schema({
    title: { type: String, require: true },
    image: { type: String, require: true },
    price: { type: Number },
    description: { type: String },
},
    { timestamps: true }
)

const UserSchema = new Schema<UserDocument>({
    fullname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    movies: {
        type: [movieModelSchema], // make movies an array of
        default: [],
    },
});

export const Movie = mongoose.model<movieModel>
    ('Movie', movieModelSchema)
