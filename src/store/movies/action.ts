import { Dispatch } from 'redux';

import { Istore, ApiResponse } from 'store/types';

import { MoviesAPI } from 'api/MoviesAPI';
import { getErrorMessage } from 'utils/getErrorMessage';


export const setMoviesAction = (list: Istore['movies'] ) => {
    return {
        type: 'movies/setMovies',
        payload: list,
    }
};

export const setErrorMoviesAction = (error: Istore['error'] ) => {
    return {
        type: 'movies/setMovies',
        payload: error,
    }
};

export const loadMovies = (category: string) => async (dispatch: Dispatch) => {
    try {
        const response = await MoviesAPI.getCategory(category);
        const extractedShows = response.data.map((item: ApiResponse) => {
            const { id, image, name, genres, premiered, network } = item.show;
            const country = network?.country.name;

            return { id, image, name, genres, country, premiered };
        })
        dispatch(setMoviesAction(extractedShows));
    } catch (error) {
        dispatch(setErrorMoviesAction(getErrorMessage(error)))
    }
};