// MultiCarousel.tsx
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

interface MultiCarouselProps {
  items: React.ReactNode[];
}

const MultiCarousel: React.FC<MultiCarouselProps> = ({ items }) => {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
  
    return (
      <div className="container mx-auto multiCarousel">
        <Slider {...settings}>
          {items.map((item, index) => (
            <div key={index} className="p-2">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                {item}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  
  export default MultiCarousel;