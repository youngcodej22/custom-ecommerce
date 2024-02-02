import './styles/components/style.css';

import Header from './components/Header/Header';
import Contents from './components/Contents/Contents';

function App() {
    return (
        <>
            <div className="container">
                <Header />
                <Contents />
            </div>
        </>
    );
}

export default App;
