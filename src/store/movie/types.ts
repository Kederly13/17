import { IMoviesDetail } from "types/IMoviesDetail";

export interface IMovieStore {
    movie: IMovieDetail | null;
    error: string | null;
};

export interface IMovieDetail {
    id: number,
    image: { medium: string; original: string };
    name: string
    genres: string[] | string;
    country: string;
    rating: { average?: number };
    summary: string;
    premiered?: string;
}

