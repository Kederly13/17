import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'components/hooks';
import { selectMovie } from 'store/movie/selector';
import { ID } from 'types/ID';
import { IMovieDetail } from 'store/movie/types';
import { loadMovie } from 'store/movie/action';

import { CardContent } from "components/CardContent";

import classes from './styles.module.css';

const DetailCard = () => {

    const dispatch = useAppDispatch();
    const { id } = useParams<ID>();
    const [movie, setMovie] = useState<IMovieDetail | undefined>(undefined);
    const singleMovie = useAppSelector(selectMovie);

    useEffect(() => {
        if(typeof id === 'string') {
            dispatch(loadMovie(id))
        };
        
    }, [id])
    console.log(singleMovie);
    return (
        <CardContent>
            <div></div>
        </CardContent>
    )
};

export { DetailCard };