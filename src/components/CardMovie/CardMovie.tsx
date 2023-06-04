import classNames from "classnames";

import { VARIANTS } from "./constants";
import { ICardMovie } from "./ICardMovies";
import { Image } from "components/Image";

import styles from './styles.module.scss';


const CardMovie: React.FC<ICardMovie> = ({ name, image, year, genres, variant, country }) => {
    return (
        <div className={classNames(styles.card, {
            [styles[variant]]:variant 
        })}>
            {image && <Image alt={name} image={image} />}
            <div className={styles.cardInfo}>
                <h3 className={styles.movieName}>{name}</h3>
                { year && country && (
                    <div className={styles.cardDetails}>
                        <p className={styles.year}>{year}</p>
                        <p className={styles.country}>{country}</p>
                    </div>
                )} 
                <p className={styles.genre}>{genres}</p>
            </div>
        </div>
    );
}

export {CardMovie, VARIANTS};