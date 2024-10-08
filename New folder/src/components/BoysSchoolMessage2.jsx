import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BoysSchoolMessage2 = () => {
  return (
    <div className="container bg-white py-5">
      {/* Main Content */}
      <div className="row align-items-center g-5">
        
        {/* Right Side - Image Section */}
        <div className="col-md-6">
          <img 
            src="https://www.salesian.vic.edu.au/app/uploads/2021/06/IMG_1543-min-1904x1269.jpg" // Default image
            alt="Students studying" 
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Left Side - Text Section */}
        <div className="col-md-6 text-center text-md-start">
          <h2 className=" fw-bold mb-3" style={{color:'#1A2D59'}}>
            BROWSE THE SALESIAN<br/> COLLEGE HONOUR ROLL
          </h2>
          <p className="mb-4 lead">
            We are commited to recognize the contributions our past pupils<br/> make. Explore the digital honour Roll Profiles or contribute any<br/> information you might have about past students.
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
  );
};

export default BoysSchoolMessage2;