import React, { useState } from 'react';
import '../css/CarouselComponent.css'; // Include your styles

const carouselData = [
  {
    image: 'https://www.salesian.vic.edu.au/app/uploads/2023/12/Salesian-DUX-01-1.jpg', // Replace with actual image URLs
    title: '2024 COLLEGE MASTERPLAN',
    description: 'Discover the Salesian difference...',
  },
  {
    image: 'https://www.salesian.vic.edu.au/app/uploads/2024/03/MG_0861.jpg',
    title: '2023 VCE RESULTS AND COLLEGE MASTERPLAN',
    description: 'Learn more about our 2023 outstanding academic results...',
  },
  {
    image: 'https://www.salesian.vic.edu.au/app/uploads/2023/12/Salesian-DUX-01-1.jpg', // Replace with actual image URLs
    title: '2024 COLLEGE MASTERPLAN',
    description: 'Discover the Salesian difference...',
  },
  {
    image: 'https://www.salesian.vic.edu.au/app/uploads/2024/03/MG_0861.jpg',
    title: '2023 VCE RESULTS AND COLLEGE MASTERPLAN',
    description: 'Learn more about our 2023 outstanding academic results...',
  },
  // Add more objects as needed
];

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLineClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container w-100">
      {/* Left Section: Dynamic Carousel Content */}
      <div className="carousel-left">
        <img src={carouselData[currentIndex].image} alt="Carousel" className="carousel-image vh-100 mobile-view-img" />
        <div className="carousel-text">
          <h1>{carouselData[currentIndex].title}</h1>
          <p>{carouselData[currentIndex].description}</p>
          <button className="learn-more-btn">Learn More</button>
        </div>
        <div className="carousel-lines">
          {carouselData.map((_, index) => (
            <div
              key={index}
              className={`line ${currentIndex === index ? 'active' : ''}`}

              onClick={() => handleLineClick(index)}
            ></div>
          ))}
        </div>
      </div>

      {/* Right Section: Permanent Card */}
      <div className="carousel-right hide-mv">
        <div className="card-content">
          <h2>2023 VCE RESULTS AND COLLEGE MASTERPLAN</h2>
          <p>Discover the Salesian difference and learn more about our 2023 outstanding academic results and the College Masterplan.</p>
          <button className="book-tour-btn">Book a Tour</button>
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;