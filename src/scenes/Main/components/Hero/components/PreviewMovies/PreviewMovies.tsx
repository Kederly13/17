import {useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'components/hooks';

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

    console.log(moviesList);
    
    return (

        <CardContent>
           
        </CardContent>
        
    )
}

export { PreviewMovies };