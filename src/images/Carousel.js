import React from 'react'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from 'react-slick';
import slide1 from '../../public/images/ftr_img1.jpg'


export default function Carousel() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoScroll:true
  };


  return (
    <Slider {...settings} className='carousel'>
      <div>
        <img src={slide1} />
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  )
}
