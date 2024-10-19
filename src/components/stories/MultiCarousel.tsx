// MultiCarousel.tsx
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

interface MultiCarouselProps {
  items: React.ReactNode[];
}

const CustomPrevArrow = (props: any) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{
        width: "48px",
        height: "48px",
        display: "block",
        background: "rgb(110, 110, 110)",
        textAlign: "center",
        borderRadius: "50%",
        padding: "10px",
        paddingTop: "15px",
        left: "35px",
      }}
      onClick={onClick}
    >
      Prev
    </div>
  );
};

const CustomNextArrow = (props: any) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{
        width: "48px",
        height: "48px",
        display: "block",
        background: "rgb(110, 110, 110)",
        textAlign: "center",
        borderRadius: "50%",
        padding: "10px",
        paddingTop: "15px",
        right: "35px",
      }}
      onClick={onClick}
    >
      Next
    </div>
  );
};


const MultiCarousel: React.FC<MultiCarouselProps> = ({ items }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    adaptiveHeight: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
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
    <div className="grid container mx-auto multiCarousel">
      <Slider {...settings}>
        {items.map((item, index) => {
          return (
            <div key={index} className="p-1">
              <div className="bg-white p-4 rounded-lg border">
                {item}
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  );
};

export default MultiCarousel;