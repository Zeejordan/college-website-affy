import React from 'react';
import "../css/ImportantLinksStyle.css";

export const ImportantLinks = () => {
  return (
    <>
      <div className="container-fluid mt-5 custom-card">
        <div className="row">
          {/* Card Column */}
          <div className="col-12 mb-3">
            <div className="card">
              <img
                src="https://via.placeholder.com/150"
                className="card-img-top"
                alt="Card Image"
              />
              <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
