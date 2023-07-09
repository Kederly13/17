import { IVARIANTS } from "./constants";

export interface ICardMovieProps {
    id?: number,
    image: string;
    name: string
    genres: string[] | string;
    year?: string;
    network?: { country: {
        name: string;
        }  
    };
    country?: string;
    variant: IVARIANTS['PRIMARY'] | IVARIANTS['SECONDARY'];
    
}