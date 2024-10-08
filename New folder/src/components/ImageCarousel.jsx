import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/ImageCarouselStyle.css'; // Assuming you have a CSS file for additional styling

const ImageCarousel = () => {
  const images = [
    'https://www.salesian.vic.edu.au/app/uploads/2023/12/Salesian-DUX-01-1.jpg',
    'https://www.salesian.vic.edu.au/app/uploads/2024/03/MG_0861.jpg',
    'https://www.salesian.vic.edu.au/app/uploads/2023/12/Salesian-DUX-01-1.jpg',
  ];

  // Slick carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <button className="carousel-arrow prev">‹</button>,
    nextArrow: <button className="carousel-arrow next">›</button>,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-slide position-relative">
            <img
              src={image}
              alt={`carousel-${index}`}
              className="w-100"
              style={{
                height: '100vh',
                objectFit: 'cover',
              }}
            />
            {/* Overlay Text */}
            <div className="carousel-overlay position-absolute top-50 start-50 translate-middle text-center text-white">
              <h2 className="display-4 fw-bold">2026 ENROLMENTS</h2>
              <button className="btn btn-danger mt-3">Find Out More</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
