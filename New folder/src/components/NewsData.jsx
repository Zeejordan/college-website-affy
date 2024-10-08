import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const NewsCard = ({ image, date, category, title }) => {
  return (
    <div className="col-12 col-sm-6 col-lg-4 mb-4">
      <div className="card h-100 shadow-sm border-0">
        <img
          className="card-img-top"
          src={image}
          alt={title}
          style={{ height: '20rem', objectFit: 'cover' }}
        />
        <div className="card-body">
          <small className="text-muted">{date}</small>
          <p className="text-danger">{category}</p>
          <h5 className="card-title">{title}</h5>
        </div>
      </div>
    </div>
  );
};

const LatestNews = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-5">Latest News</h2>
      <div className="row">
        <NewsCard
          image="https://www.salesian.vic.edu.au/app/uploads/2024/10/TEASER_VA-SHOW-2024_V2-768x768.jpg"
          date="07/10/2024"
          category="Community Notices"
          title="2024 Visual Arts & Technology Show"
        />
        <NewsCard
          image="https://www.salesian.vic.edu.au/app/uploads/2024/09/MCG-Image-2-1-768x512.jpg"
          date="26/09/2024"
          category="Alumni News"
          title="Salesian College Chadstone Alumni Business Lunch - Featuring The Resilience Project!"
        />
        <NewsCard
          image="https://www.salesian.vic.edu.au/app/uploads/2024/09/IMG_3927-768x1152.jpg"
          date="20/09/2024"
          category="Cultural and Community Events"
          title="End of Term 3, 2024 Assembly"
        />
      </div>
    </div>
  );
};

export default LatestNews;