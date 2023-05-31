import { IMoviesDetail } from "types/IMoviesDetail";

export interface Istore {
    movies: IMoviesDetail[];
    error: string | null;
}

export interface ApiResponse {
    score: number;
    show: IMoviesDetail;
}