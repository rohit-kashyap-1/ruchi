import React from 'react'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from 'react-slick';
import slide1 from '../images/hero1.jpg'
import slide2 from '../images/hero2.jpg'


export default function Carousel() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };


  return (
    <Slider {...settings} className='carousel'>
      <div>
        <div className='sitem' style={{ backgroundImage: "url('" + slide1 + "')" }}>
          <div className='content'>
          <h1>Content </h1>
          </div>
        </div>
      </div>
      <div>
        <div className='sitem' style={{ backgroundImage: "url('" + slide2 + "')" }}>
          <h1>Content </h1>
        </div>
      </div>

    </Slider>
  )
}
