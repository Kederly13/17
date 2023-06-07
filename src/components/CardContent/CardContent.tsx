import { ReactNode } from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss'

interface ICardContentParams {
    className?: string,
    children: ReactNode; 
};

const CardContent: React.FC<ICardContentParams> = ({ className, children }) => (
    <div className={classNames(styles.cardContent, className)}>
        {children}
    </div>
)

export { CardContent };