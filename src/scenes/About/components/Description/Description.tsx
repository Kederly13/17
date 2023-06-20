import { Section } from 'components/Section';
import Picture from './picture.png';
import { CardContent } from 'components/CardContent';

import classes from './styles.module.css';

const Description = () => (
    <Section>
        <CardContent className={classes.description}>
            <img src={Picture} alt='picture' className={classes.picture} />
            <div className={classes.infoBlock}>
                <h2 className={classes.descriptionHeading}>MOVIESinfo</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. 
                </p>
            </div>
        </CardContent>
    </Section>
)         

export { Description };