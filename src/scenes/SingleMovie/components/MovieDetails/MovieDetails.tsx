import { Section } from 'components/Section';
import { DetailCard } from './components/DetailCard/'
import classes from './styles.module.css';

const MovieDetails = () => (
    <Section className={classes.section}>
        <DetailCard/>
    </Section>
);
    
export { MovieDetails };
