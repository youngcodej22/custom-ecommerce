import './styles/components/style.css';

import Header from './components/Header/Header';
import Contents from './components/Contents/Contents';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <>
            <div className="container">
                <Header />
                <Contents />
                <Footer />
            </div>
        </>
    );
}

export default App;
