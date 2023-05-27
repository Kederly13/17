import { ReactNode } from 'react';

import './styles.css';

interface IPageTitleParams {
    children: ReactNode;
};

const PageTitle: React.FC<IPageTitleParams> = ({ children }) => <h1 className='pageTitle'>{children}</h1>

export { PageTitle };