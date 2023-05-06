import { movieModel } from "../../model/movieModel";

export interface creatMovie {
    title: string,
    image: string,
    price: number,
    description: string,
}

export interface MovieUpdate {
    id: string,
    title: string,
    image: string,
    price: number,
    description: string,
}


export interface creatMovie {
    input: movieModel
}

export interface updateMovie {
    input: movieModel
}