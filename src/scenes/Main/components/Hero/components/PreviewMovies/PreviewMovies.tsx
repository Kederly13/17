import {useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'components/hooks';
import { MoviesAPI } from 'api/MoviesAPI';
import axios from 'axios';

import { loadMovies } from 'store/movies/action';
import { selectMovies } from 'store/movies/selectors';
import { CardContent } from 'components/CardContent';

import { MovieImage } from 'components/MovieImage';

import classes from './styles.module.css';


const PreviewMovies = () => {

    const dispatch = useAppDispatch();
    const moviesList = useAppSelector(selectMovies);

    useEffect(() => {
        dispatch(loadMovies());
    }, [dispatch])

    const url = 'https://api.tvmaze.com/search/shows?q=';

// This Api is for testing p
const MoviesAPI = {
    async getGirls() {
        try {
            const response = await axios.get(`${url}girls`);
            console.log(response.data);
            return response;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
};
    const result = MoviesAPI.getGirls();
    console.log(result);

    console.log(moviesList);
    
    return (

        <CardContent>
           
        </CardContent>
        
    )
}

export { PreviewMovies };