export interface IMoviesDetail {
    id?: number,
    image: string | { medium: string; original: string };
    name: string
    genres: string[] | string;
    premiered?: string;
    network?: { country: {
        name: string;
        }  
    };
    country: string;
    year?: number;
}