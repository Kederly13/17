

import { Preview } from "./components/Preview";
import { MainTitle } from "./components/MainTitle";
import classes from './styles.module.css';

const Main = () => {

    return (
        <div className={classes.main}>
            <MainTitle/>
            <Preview/>
        </div>
                     
    )
}

export { Main };