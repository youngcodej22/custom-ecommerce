import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';
// import Contents from '../components/Contents/Contents';

import './Layout.scss';

const Layout: React.FC = ({ children }) => {
    const [isPaddingTop, setIsPaddingTop] = useState(false);
    const location = useLocation();
    // let navigation = useNavigation();
    // let revalidator = useRevalidator();
    // let fetchers = useFetchers();
    // let fetcherInProgress = fetchers.some(f => ['loading', 'submitting'].includes(f.state));

    useEffect(() => {
        if (location.pathname !== '/') {
            setIsPaddingTop(true);
        } else {
            setIsPaddingTop(false);
        }
    }, [location]);

    return (
        <>
            <Header />
            {/* <Contents /> */}
            {/* <main>{children}</main> */}
            <main className={isPaddingTop ? 'on' : ''}>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;

/* <nav>
<ul>
    <li>
        <Link to="/">Home</Link>
    </li>
    <li>
        <Link to="/todos">Todos</Link>
    </li>
    <li>
        <Link to="/deferred">Deferred</Link>
    </li>
    <li>
        <Link to="/404">404 Link</Link>
    </li>
    <li>
        <button onClick={() => revalidator.revalidate()}>Revalidate Data</button>
    </li>
</ul>
</nav>
<Outlet /> */
