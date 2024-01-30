import React, { useRef, useState } from 'react';
import carousel1 from '/assets/carousel/01_first.jpg';
import carousel2 from '/assets/carousel/02_second.jpg';
import carousel3 from '/assets/carousel/03_third.jpg';
import carousel4 from '/assets/carousel/04_event.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

// import { LoremPicsum } from 'react-lorem-picsum';

import './MainVisual.scss';

const MainVisual = () => {
    return (
        <div className="main-visual">
            {/* <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={swiper => console.log(swiper)}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                ...
            </Swiper> */}
            <Swiper
                // cssMode={true}
                navigation={true}
                pagination={true}
                // mousewheel={true}
                keyboard={true}
                // modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                modules={[Navigation, Pagination, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide>
                    {/* <LoremPicsum width={1920} height={1000} random /> */}
                    <img src={carousel1} alt="메인광고이미지1" />
                </SwiperSlide>
                <SwiperSlide>
                    {/* <LoremPicsum width={1920} height={1000} random /> */}
                    <img src={carousel2} alt="메인광고이미지2" />
                </SwiperSlide>
                <SwiperSlide>
                    {/* <LoremPicsum width={1920} height={1000} random /> */}
                    <img src={carousel3} alt="메인광고이미지3" />
                </SwiperSlide>
                <SwiperSlide>
                    {/* <LoremPicsum width={1920} height={1000} random /> */}
                    <img src={carousel4} alt="메인광고이미지4" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default MainVisual;
