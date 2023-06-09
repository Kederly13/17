import classNames from "classnames";

import { VARIANTS } from "./constants";
import { ICardMovieProps } from "./ICardMovieProps";
import { Image } from "components/Image";

import styles from './styles.module.scss';

// interface IGenresProps {
//     genre: string,
//     index: number,
// }


const CardMovie: React.FC<ICardMovieProps> = ({ name, image, year, genres, variant, country }) => {
    return (
        <div className={classNames(styles.card, {
            [styles[variant]]:variant 
        })}>
            <Image alt={name} image={image} />
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
    );
}

export {CardMovie, VARIANTS};