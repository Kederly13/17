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

export const loadMovies = () => async (dispatch: Dispatch) => {
    try {
        const response = await MoviesAPI.getGirls();
        const extractedShows = response.data.map((item: ApiResponse) => {
            const { id, image, name, genres, premiered } = item.show;
            const year = new Date(premiered).getFullYear();
            const imageUrl = image.medium;

            return { id, image: imageUrl, name, genres, year };
        })
        dispatch(setMoviesAction(extractedShows));
    } catch (error) {
        dispatch(setErrorMoviesAction(getErrorMessage(error)))
    }
};