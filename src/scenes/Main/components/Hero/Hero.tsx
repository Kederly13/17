import { Section } from 'components/Section';
import { PreviewMovies } from './components/PreviewMovies';

import classes from './styles.module.css';

const Hero = () => (

    <Section className={classes.section}>
        <div className={classes.mainTitleWrapper}>
            <h1 className={classes.mainTitle}>MOVIESinfo</h1>
            <h2 className={classes.mainSubtitle}>Самый популярный портал о фильмах</h2>
        </div>
        <PreviewMovies/>
    </Section>

)

export { Hero };
