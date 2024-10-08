import React from 'react';

const PrincipalMessage = () => {
  return (
    <div className=" text-white  text-center position-relative" style={{ background: "#1A2D59" }}>
      {/* <img src='https://images.pexels.com/photos/6517325/pexels-photo-6517325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='w-100' style={{ height: "200px", width: "100%", objectFit: "cover" }} /> */}
      <div className='border'>

        <h3 className="text-uppercase small letter-spacing-1 mb-3 mt-5">A Message From the Principal</h3>

        <p className="container font-italic mx-auto mb-4">
          Salesian College Chadstone is a welcoming Catholic community renowned for its integrity and
          creative learning approaches that bring out the best in boys. Our rich Salesian charism
          underpinned by the educational principles of founder, St John Bosco, provides the foundation
          of a future focused pedagogical vision.
        </p>

        <button className="btn btn-danger btn-rounded px-4 py-2">
          READ MORE
        </button>

        <div className="my-5 d-flex justify-content-center align-items-center ">
          <img
            src="https://images.pexels.com/photos/8420382/pexels-photo-8420382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Replace with actual image source
            alt="Principal"
            className="rounded-circle border border-white"
            style={{ width: '100px', height: '100px', objectFit: 'fill' }}
          />
          <div className="ms-3 text-start ">
            <h4 className="fw-bold h6">Mark Ashmore</h4>
            <p className="text-danger mb-0">Principal</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipalMessage;