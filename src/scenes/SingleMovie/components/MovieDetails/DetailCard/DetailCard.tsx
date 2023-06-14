import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'components/hooks';
import { selectMovie } from 'store/movie/selector';

import { ID } from 'types/ID';

import { loadMovie } from 'store/movie/action';

import { CardContent } from 'components/CardContent';
import { Image } from 'components/Image';

import star from './star.svg'

import { getYear } from 'utils/getYear';

import classes from './styles.module.css';

const DetailCard = () => {
    const dispatch = useAppDispatch();
    const { id } = useParams<ID>();
    const singleMovie = useAppSelector(selectMovie);

    useEffect(() => {
        id && dispatch(loadMovie(id))
    }, [id])
    
    console.log(singleMovie);

    if (!singleMovie) {
        return null;
    };
    const { name, image, country, rating, genres, premiered, summary } = singleMovie;

    return (
        <CardContent>
            <div className={classes.detailWrapper}>
                <Image alt={name} image={image.original} />
                <div className={classes.cardInfo}>
                    <div className={classes.detailHeader}>
                        <h3 className={classes.movieName}>{name}</h3>
                        {rating.average && (
                            <div className={classes.rating}>
                                <img alt='star' src={star} className={classes.star}/>
                                <span className={classes.ratingNumber}>{rating.average}</span>
                            </div>
                        )}
                    </div>
                    {premiered && (
                        <div className={classes.premiered}>
                            <span className={classes.infoName}>ГОД ВЫХОДА:</span>
                            <span className={classes.infoProp}>{getYear(premiered)}</span>
                        </div>
                    )}
                    {country && (
                        <div className={classes.country}>
                            <span className={classes.infoName}>СТРАНА:</span>
                            <span className={classes.infoProp}>{country}</span>
                        </div>
                    )}
                    <div className={classes.genres}>
                        <span className={classes.infoName}>ЖАНР:</span>
                        {Array.isArray(genres) ? (
                            genres.map((genre, index) => (
                                <span key={index} className={classes.genre}>{genre}</span>
                            ))
                        ) : (
                            <span className={classes.genre}>{genres}</span>
                        )}
                    </div>
                    <div className={classes.summary}>
                        <span className={classes.infoName}>ОПИСАНИЕ:</span>
                        <p className={classes.summaryText}>{summary}</p>
                    </div>
                </div>
            </div>
        </CardContent>
    )
};

export { DetailCard };