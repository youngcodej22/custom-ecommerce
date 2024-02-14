import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';
// import Contents from '../components/Contents/Contents';

import './Layout.scss';

const Layout: React.FC = ({ children }) => {
    const location = useLocation();
    const [isPaddingTop, setIsPaddingTop] = React.useState(false);
    // let navigation = useNavigation();
    // let revalidator = useRevalidator();
    // let fetchers = useFetchers();
    // let fetcherInProgress = fetchers.some(f => ['loading', 'submitting'].includes(f.state));

    useEffect(() => {
        // console.log('22', location.pathname);

        if (location.pathname !== '/') {
            setIsPaddingTop(true);
        }
        // else {
        //     setIsPaddingTop(false);
        // }
    }, [location.pathname]);

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
