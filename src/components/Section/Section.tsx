import { ReactNode } from 'react';
import classNames from 'classnames';

import classes from './styles.module.css';


interface ISectionParams {
    children: ReactNode;
    className?: ReactNode;
}

const Section: React.FC<ISectionParams> = ({ children }) => (
    <section> 
        <div className={classes.container}>
            {children}
        </div>
    </section>
)


export { Section };