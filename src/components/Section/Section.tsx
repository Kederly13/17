import { ReactNode } from 'react';

import classes from './styles.module.css';


interface ISectionParams {
    children: ReactNode;
    className: ReactNode;
    containerFluid?: boolean; 
}

const Section: React.FC<ISectionParams> = ({ children, className, containerFluid }) => (
    // сделать проверку на className
    <section className={`${classes.section}, ${className}`}> 
        <div className={classes.container}>
            {children}
        </div>
    </section>
)


export { Section };