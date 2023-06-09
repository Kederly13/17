import { Dispatch } from 'redux';

import { Istore, ApiResponse } from 'store/types';

import { MoviesAPI } from 'api/MoviesAPI';
import { getErrorMessage } from 'utils/getErrorMessage';

export const setMovieAction = () => {
    return {
        type: 'movie/setMovie',
        payload: item,
    }
}

export const 

export const loadMovie = (id: string) => async (dispatch: Dispatch) => {
    try {
        const response = await MoviesAPI.getSingle(id);
        const extractedShow = response.data.map((item: ApiResponse) => {
            const { id, image, name, genres, premiered, network } = item.show;
            const country = network?.country.name;

            return { id, image, name, genres, country, premiered };
        })
        dispatch(setMovieAction(extractedShow));
    } catch (error) {
        dispatch(setErrorMovieAction(getErrorMessage(error)))
    }
};