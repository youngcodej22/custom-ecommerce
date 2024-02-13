import React from 'react';
import MainVisual from '../MainVisual/MainVisual';
import MainContents from '../MainContents/MainContents';
import MainMdPick from '../MainMdPick/MainMdPick';
import SideBanner from '../SideBanner/SideBanner';
import Insta from '../Insta/Insta';

import './Contents.scss';

// ! container classname은 styles/general에 연결
const Contents = () => {
    return (
        <div className="main-content">
            <MainVisual />
            <MainContents />
            <MainMdPick />
            <SideBanner />
            <Insta />
        </div>
    );
};

export default Contents;
