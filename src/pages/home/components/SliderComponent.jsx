
import React, { memo } from 'react';
import Slider from "react-slick";
import { Image } from 'antd';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.scss';

const SliderComponent = (props) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };

    const { sliders } = props

    return (
        <Slider {...settings} className='slider_container'>
            {sliders && sliders.map((item, index) => {
                return <Image
                    key={index}
                    src={item}
                    alt={'slider'} preview={false}
                    width={'100%'} height='274px' />
            })}
        </Slider>
    );
}

export default memo(SliderComponent);