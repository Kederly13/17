import classNames from "classnames";
import { VARIANTS } from "./constants";
import { IMoviesDetail } from "types/IMoviesDetail";

import { MovieImage } from "components/MovieImage";

import classes from './styles.module.css';

interface ICardMovie extends IMoviesDetail {
    variant: string;
}

const CardMovie: React.FC<ICardMovie> = ({ name, image, year, genres, variant, country }) => {
    return (
        <div className={classNames(classes.card, {
            [classes[variant]]:variant 
        })}>
            <MovieImage
                alt={name}
                className=''
                image={image}
            />
            <div className={classes.cardInfo}>
                <h3 className={classes.movieName}>{name}</h3> 
                <p className={classes.year}>{year}</p>
                <p className={classes.country}>{country}</p>
                <p className={classes.genre}>{genres}</p>
            </div>
        </div>
    );
}

export {CardMovie, VARIANTS};