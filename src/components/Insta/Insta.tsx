import React from 'react';
import { LoremPicsum } from 'react-lorem-picsum';

import './Insta.scss';

const Insta = () => {
    return (
        <div className="insta-cont">
            <h2 className="en">
                INSTAGRAM
                <p>
                    <a href="#" target="_blank">
                        @mckayson_official
                    </a>
                </p>
            </h2>
            <div className="insta-box">
                <LoremPicsum width={282} height={282} random />
                <LoremPicsum width={282} height={282} random />
                <LoremPicsum width={282} height={282} random />
                <LoremPicsum width={282} height={282} random />
                <LoremPicsum width={282} height={282} random />
                <LoremPicsum width={282} height={282} random />
            </div>
        </div>
    );
};

export default Insta;
