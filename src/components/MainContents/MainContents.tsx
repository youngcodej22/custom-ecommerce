import React from 'react';

import './MainContents.scss';

const MainContents = () => {
    return (
        <div className="main-contents">
            <div className="main-goods">
                <div className="goods-list">
                    <div className="goods-list-title">
                        <h3>SEASON TREND</h3>
                    </div>
                    <div className="goods-list-content">
                        <div className="goods-tab">
                            <div className="good-tab-title">
                                <ul>
                                    <li>
                                        <a href="">
                                            <span>ALL</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <span>MEN</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <span>WOMEN</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <span>ACC</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="goods-tab-content">
                                <div className="goods-tab-box">
                                    <ul>{/* li>div.item>div.item-photo+div.item-info */}</ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btn-goods-down-more"></div>
            </div>
            {/* 숨겨진거 나중에 처리 */}
            {/* <div className="slide-c"></div> */}
            <div className="main-promotion"></div>
        </div>
    );
};

export default MainContents;
