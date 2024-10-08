import React from 'react';
import '../css/FindCarousel.css'; // Importing CSS for animations

const FindCarousel = () => {
  return (
    <>
      <div id="carouselExampleInterval" className="carousel slide mt-4" data-bs-ride="carousel" style={{ backgroundColor: "#484a4d40" }}>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src="./assets/download (1).jpg" className="d-block w-75 mx-auto" style={{ height: '600px', objectFit: 'cover' }} alt="..." />
            <div className="carousel-caption-web">
              <h3 className="slide-text-web">hey please provide some contant here </h3>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="./assets/download (2).jpg" className="d-block w-75 mx-auto" style={{ height: '600px', objectFit: 'cover' }} alt="..." />
            <div className="carousel-caption-web">
              <h3 className="slide-text-web align-item">hey please provide some contant here </h3>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./assets/download.jpg" className="d-block w-75 mx-auto" style={{ height: '600px', objectFit: 'cover' }} alt="..." />
            <div className="carousel-caption-web">
              <h3 className="slide-text-web">hey please provide some contant here </h3>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default FindCarousel;
