import React, { createElement } from 'react';
import SlickSlider from 'react-slick';

export default function Slider({ settings, data, sliderType }) {
    return (
        <SlickSlider {...settings}>
            {data?.map((slide, index) =>
                createElement(sliderType, { ...slide, key: index }),
            )}
        </SlickSlider>
    );
    return null
}
