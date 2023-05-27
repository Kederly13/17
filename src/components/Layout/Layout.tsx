import { ReactNode } from 'react';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Section } from 'components/Section';

interface ILayoutParams  {
    children: ReactNode; 
}

const Layout: React.FC<ILayoutParams> = ({ children }) => (
    <>
        <Section>
            <Header />
                <main>
                    {children}
                </main>
        </Section>
        <Footer />
        
    </>
)

export { Layout };