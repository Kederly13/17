import { ReactNode } from 'react';

import classes from './styles.module.css';


interface ISectionParams {
    children: ReactNode;
    className: ReactNode;
    containerFluid?: boolean; 
}

const Section: React.FC<ISectionParams> = ({ children, className, containerFluid }) => (
    <section className={`${classes.section}, ${className}`}>
        <div className={!containerFluid ? 'container' : 'container-fluid'}>
            {children}
        </div>
    </section>
)


export { Section };