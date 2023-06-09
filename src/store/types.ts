import { IMoviesDetail } from "types/IMoviesDetail";

export interface Istore {
    movies: IMoviesDetail[] | null;
    error: string | null;
}

export interface ApiResponse {
    score: number;
    show: {
        id?: number,
        image: { medium: string; original: string };
        name: string
        genres: string[] | string;
        premiered?: string;
        network?: { country: {
            name: string;
            }  
        };
        country: string;
        year?: number;
    };
}
