import classes from './styles.module.css';
import { ReactNode } from 'react';

interface IContainerParams {
    children: ReactNode; 
}

const Container: React.FC<IContainerParams> = ({ children }) => {
    return (
        <div className={classes.container}>
            {children}
        </div>
    )
}

export { Container };