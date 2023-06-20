import { ReactNode } from 'react';

import classes from './styles.module.css';


interface ISectionParams {
    children: ReactNode;
    className?: ReactNode;
}

const Section: React.FC<ISectionParams> = ({ children, className }) => (
    <section className={`${classes.section}, ${className}`}> 
        <div className={classes.container}>
            {children}
        </div>
    </section>
)


export { Section };