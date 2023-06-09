import { Section } from "components/Section";
import { CategoryItem } from "./CategoryItem";

import classes from './styles.module.css';

const Category = () => (
        <Section className={classes.Section}>
            <CategoryItem/> 
        </Section>   

)
export { Category };