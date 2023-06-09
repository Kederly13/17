import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { routePath } from "routeСonfig/routes";

import { VARIANTS } from "./constants";
import { ICardMovieProps } from "./ICardMovieProps";
import { Image } from "components/Image";

import styles from './styles.module.scss';


const CardMovie: React.FC<ICardMovieProps> = ({ name, image, year, genres, variant, country, id }) => {
    return (
        <NavLink to={`${routePath.movies}/${id}`}>
            <div className={classNames(styles.card, {
                [styles[variant]]:variant 
            })}>
                <Image alt={name} image={image} className={styles.image} />
                <div className={styles.cardInfo}>
                    <h3 className={styles.movieName}>{name}</h3>
                    {(year && country) && (
                        <div className={styles.cardDetails}>
                            <p className={styles.year}>{year}</p>
                            <p className={styles.country}>{country}</p>
                        </div> 
                    )}
                    <div className={styles.genres}>
                        {Array.isArray(genres) ? (
                            genres.map((genre, index) => (
                                <span key={index} className={styles.genre}>{genre}</span>
                            ))
                        ) : (
                            <span className={styles.genre}>{genres}</span>
                        )}
                    </div>
                </div>
            </div>
        </NavLink>
    );
}

export {CardMovie, VARIANTS};