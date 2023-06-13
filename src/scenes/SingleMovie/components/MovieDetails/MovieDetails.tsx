import { Section } from 'components/Section';
import { DetailCard } from './DetailCard';
import classes from './styles.module.css';

const MovieDetails = () => (
    <Section className={classes.section}>
        <DetailCard/>
    </Section>
)
    


export { MovieDetails };
