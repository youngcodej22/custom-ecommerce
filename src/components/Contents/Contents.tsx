import React from 'react';
import MainVisual from '../MainVisual/MainVisual';
import MainContents from '../MainContents/MainContents';
import MainMdPick from '../MainMdPick/MainMdPick';

import './Contents.scss';

// ! container classname은 styles/general에 연결
const Contents = () => {
    return (
        <div className="main-content">
            <MainVisual />
            <MainContents />
            <MainMdPick />
        </div>
    );
};

export default Contents;
