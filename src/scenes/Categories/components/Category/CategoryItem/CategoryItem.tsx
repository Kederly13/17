import {useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'components/hooks';

import { loadMovies } from 'store/movies/action';
import { selectMovies } from 'store/movies/selectors';

import { CardContent } from 'components/CardContent';
import { Section } from 'components/Section';
import { CardMovie, VARIANTS } from 'components/CardMovie';

import { CONSTANTS } from 'constants/constants';

import classes from './styles.module.css';

const CategoryItem = () => {

    const dispatch = useAppDispatch();
    const moviesList = useAppSelector(selectMovies);

    useEffect(() => {
        dispatch(loadMovies(CONSTANTS.GIRLS));
    }, [dispatch])

    return (
        <></>
    )
}

export {CategoryItem};
