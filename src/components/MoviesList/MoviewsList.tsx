import { IMoviesDetail } from 'types/IMoviesDetail';

import classes from './styles.module.css';

interface IMoviewsListParams {
    data: IMoviesDetail;
}

const MoviesList: React.FC<IMoviewsListParams> = ({ data }) => (
    <div className={classes.moviesList}>
        <></>
    </div>
    
)

export { MoviesList };