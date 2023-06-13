export interface IMoviesDetail {
    id: number,
    image: { medium: string; original: string };
    name: string
    genres: string[] | string;
    premiered?: string;
    country: string;
}