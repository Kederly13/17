import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'components/hooks';
import { CardContent } from 'components/CardContent';
import { Image } from 'components/Image';

import { ID } from 'types/ID';

import { selectMovie } from 'store/movie/selector';
import { loadMovie } from 'store/movie/action';

import star from './svg/star.svg';

import { getYear } from 'utils/getYear';

import classes from './styles.module.css';

const DetailCard = () => {
    const dispatch = useAppDispatch();
    const { id } = useParams<ID>();
    const singleMovie = useAppSelector(selectMovie);

    useEffect(() => {
        id && dispatch(loadMovie(id))
    }, [dispatch, id]);

    if (!singleMovie) {
        return null;
    };
    
    const { name, image, country, rating, genres, premiered, summary } = singleMovie;

    return (
        <CardContent className={classes.detailCardWrapper}>
            <Image alt={name} image={image?.original} className={classes.movieImage}/>
            <div className={classes.cardInfo}>
                <div className={classes.detailHeader}>
                    <h3 className={classes.movieName}>{name}</h3>
                    {rating.average && 
                    <div className={classes.rating}>
                        <img alt='star' src={star} className={classes.star}/>
                        <span className={classes.ratingNumber}>{rating.average}</span>
                    </div>}
                </div>
                {premiered && 
                    <div className={classes.premiered}>
                        <span className={classes.infoName}>ГОД ВЫХОДА:</span>
                        <span className={classes.infoProp}>{getYear(premiered)}</span>
                    </div>}
                {country && 
                    <div className={classes.country}>
                        <span className={classes.infoName}>СТРАНА:</span>
                        <span className={classes.infoProp}>{country}</span>
                    </div>}
                <div className={classes.genres}>
                    <span className={classes.infoName}>ЖАНР:</span>
                    {Array.isArray(genres) ? (
                        genres.map((genre, index) => (
                            <span key={index} className={classes.genre}>{index > 0 && ", "}{genre}</span>
                        ))
                    ) : (
                        <span className={classes.genre}>{genres}</span>
                    )}
                </div>
                <div className={classes.summary}>
                    <span className={classes.infoName}>ОПИСАНИЕ:</span>
                    <div dangerouslySetInnerHTML={{ __html: summary}} className={classes.summaryText} />
                </div>
            </div>
        </CardContent>
    )
};

export { DetailCard };