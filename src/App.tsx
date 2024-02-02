import './styles/components/style.css';

import Header from './components/Header/Header';
import MainContents from './components/MainContents/MainContents';

function App() {
    return (
        <>
            <div className="container">
                <Header />
                <MainContents />
            </div>
        </>
    );
}

export default App;
