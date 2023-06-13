import { IMoviesDetail } from "types/IMoviesDetail";

export interface IMoviesStore {
    movies: IMoviesDetail[];
    error: string | null;
};

export interface IMoviesApiResponse {
    score: number;
    show: {
        id?: number,
        image: { medium: string; original: string };
        name: string
        genres: string[] | string;
        premiered?: string;
        network?: { 
            country: {
                name: string;
            }  
        };
        country: string;
        year?: number;
    };
}