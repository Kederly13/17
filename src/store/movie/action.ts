import { Dispatch } from 'redux';
import { IMovieStore } from 'store/types';

import { MoviesAPI } from 'api/MoviesAPI';
import { getErrorMessage } from 'utils/getErrorMessage';

export const setMovieAction = (item: IMovieStore['movie']) => {
    return {
        type: 'movie/setMovie',
        payload: item,
    }
};

export const setErrorMovieAction = (error: IMovieStore['error'] ) => {
    return {
        type: 'movie/setErrorMovie',
        payload: error,
    }
};

export const loadMovie = (id: string) => async (dispatch: Dispatch) => {
    try {
       const { data } = await MoviesAPI.getSingle(id);
       const { network, ...keys } = data;
       const movie = { ...keys, country: network?.country?.name}
       
       dispatch(setMovieAction(movie));
    } catch (error) {
        dispatch(setErrorMovieAction(getErrorMessage(error)))
    }
};