import { ReactNode } from 'react';

import classes from './styles.module.css'

interface ICardContentParams {
    children: ReactNode; 
}

const CardContent: React.FC<ICardContentParams> = ({ children }) => (
    <div className={classes.cardContent}>
        {children}
    </div>
)

export { CardContent };