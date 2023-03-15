import React from 'react';
import Slider from 'react-slick';

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="https://via.placeholder.com/300x150" alt="Slide 1" />
      </div>
      <div>
        <img src="https://via.placeholder.com/300x150" alt="Slide 2" />
      </div>
      <div>
        <img src="https://via.placeholder.com/300x150" alt="Slide 3" />
      </div>
      <div>
        <img src="https://via.placeholder.com/300x150" alt="Slide 4" />
      </div>
      <div>
        <img src="https://via.placeholder.com/300x150" alt="Slide 5" />
      </div>
    </Slider>
  );
}

export default Carousel;
