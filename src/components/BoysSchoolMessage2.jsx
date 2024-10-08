import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BoysSchoolMessage2 = () => {
  return (
    <div className="container py-5 col-12">
      <div className="row">
        {/* Column that takes 10 units of width */}
        <div className="col-12 bg-white p-4">
          {/* Main Content */}
          <div className="row align-items-center g-5">
            {/* Right Side - Image Section */}
            <div className="col-md-6">
              <img 
                src="https://www.salesian.vic.edu.au/app/uploads/2021/06/IMG_1543-min-1904x1269.jpg" 
                alt="Students studying" 
                className="img-fluid rounded shadow"
              />
            </div>

            {/* Left Side - Text Section */}
            <div className="col-md-6 text-center text-md-start">
              <h2 className="fw-bold mb-3" style={{ color: '#1A2D59' }}>
                BROWSE THE SALESIAN<br /> COLLEGE HONOUR ROLL
              </h2>
              <p className="mb-4 lead">
                We are committed to recognize the contributions our past pupils<br /> make. Explore the digital honour roll profiles or contribute any<br /> information you might have about past students.
              </p>
              <p className="mb-6 lead">
                Our guide explores the five key benefits of choosing a boys’ school.
              </p>
              <a 
                href="#" 
                className="btn btn-danger py-3 px-4 rounded-pill text-uppercase fw-semibold shadow"
              >
                Download the PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoysSchoolMessage2;
