import React from 'react';
import MainVisual from '../MainVisual/MainVisual';

import './MainContents.scss';

// ! container classname은 styles/general에 연결
const MainContents = () => {
    return (
        <div className="main-content">
            <MainVisual />
        </div>
    );
};

export default MainContents;
