import { ReactNode } from 'react';

import styles from './styles.module.scss'

interface ICardContentParams {
    className?: string,
    children: ReactNode; 
}

const CardContent: React.FC<ICardContentParams> = ({ className, children }) => (
    <div className={`${styles.cardContent} ${className}`}>
        {children}
    </div>
)

export { CardContent };