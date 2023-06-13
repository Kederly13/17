import { IMoviesStore } from './types';
import { IMoviesDetail } from 'types/IMoviesDetail';

export const selectMovies = (state: { moviesReducer: IMoviesStore }): IMoviesDetail[] =>
  state.moviesReducer.movies;


export const selectError = (state: { moviesReducer: IMoviesStore }): string | null =>
  state.moviesReducer.error;
