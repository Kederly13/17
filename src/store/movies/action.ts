import { Dispatch } from 'redux';

import { IMoviesStore, IMoviesApiResponse } from './types';

import { MoviesAPI } from 'api/MoviesAPI';
import { getErrorMessage } from 'utils/getErrorMessage';


export const setMoviesAction = (list: IMoviesStore['movies'] ) => {
    return {
        type: 'movies/setMovies',
        payload: list,
    }
};

export const setErrorMoviesAction = (error: IMoviesStore['error'] ) => {
    return {
        type: 'movies/setMovies',
        payload: error,
    }
};

export const loadMovies = (category: string) => async (dispatch: Dispatch) => {
    try {
        const { data } = await MoviesAPI.getCategory(category);
        const extractedShows = data.map((item: IMoviesApiResponse) => {
            const { id, image, name, genres, premiered, network } = item.show;
            const country = network?.country.name;

            return { id, image, name, genres, country, premiered };
        });
        
        dispatch(setMoviesAction(extractedShows));
    } catch (error) {
        dispatch(setErrorMoviesAction(getErrorMessage(error)))
    }
};