import classNames from "classnames";
import { VARIANTS } from "./constants";
import { IMoviesDetail } from "types/IMoviesDetail";

import { MovieImage } from "components/MovieImage";

import classes from './styles.module.css';

interface ICardMovie extends IMoviesDetail {
    variant: string;
}

const CardMovie: React.FC<ICardMovie> = ({ id, name, image, premiered, genres, variant}) => {
    return (
        <div className={classNames(classes.card, {
            [classes[variant]]:variant 
        })}>
            <MovieImage
                alt={name}
                className=''
                src={image.original}
            />
            <h3>{name}</h3>

        </div>
    );

}

export {CardMovie};