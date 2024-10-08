import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

const BoysSchoolMessage = () => {
  return (
    <div className="container my-5 bg-white position-relative p-4">
      {/* Main Content */}
      <div className="row align-items-center">
        {/* Left Side - Text Section */}
        <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
          <h2 className=" fw-bold mb-3" style={{color:'#1A2D59'}}>
            WHY A BOYS' SCHOOL
          </h2>
          <p className="mb-4 lead">
            Both single-sex and co-educational secondary schools offer high-quality education. 
            When choosing between these options, your decision should be guided by your child's 
            individual needs.
          </p>
          <p className="mb-4 lead">
            Our guide explores the five key benefits of choosing a boys’ school.
          </p>
          <a 
            href="#" 
            className="btn btn-danger text-white py-2 px-4 rounded-pill"
          >
            Download the PDF
          </a>
        </div>

        {/* Right Side - Image Section */}
        <div className="col-md-6">
          <img 
            src="https://www.salesian.vic.edu.au/app/uploads/2021/06/IMG_1543-min-1904x1269.jpg" // Default image
            alt="Students studying" 
            className="img-fluid rounded-lg shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default BoysSchoolMessage;