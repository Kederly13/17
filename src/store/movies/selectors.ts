import { Istore } from "store/types";
import { IMoviesDetail } from 'types/IMoviesDetail';

export const selectMovies = (state: { moviesReducer: Istore }): IMoviesDetail[] =>
  state.moviesReducer.movies;


export const selectError = (state: { moviesReducer: Istore }): string | null =>
  state.moviesReducer.error;
