import classes from './styles.module.css';
import { ReactNode } from 'react';

interface ISectionParams {
    children: ReactNode; 
}

const Section: React.FC<ISectionParams> = ({ children }) => {
    
    return (
        <section className={classes.section}>
            <div className={classes.container}>
                {children}
            </div>
        </section>
    )
}

export { Section };