import React from 'react'
import img2 from "../images/college_photo_2.jpg"
import img3 from "../images/college_photo_3.jpg"
import img4 from "../images/college_photo_4.jpg"
import "../css/Carousel.css"

const Carousel = () => {
    return (
        <>
            {/* carousel start */}
            <div id="carouselExampleCaptions" className="carousel slide slider-text">
                {/* <div className="carousel-indicators">
                    <button className="slider-changer" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button>
                    <button className="slider-changer" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button className="slider-changer" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div> */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className='slider-bg' style={{ backgroundImage: `url(${img2})` , filter: 'brightness(70%)'}}>
                            <h5>Salesian College</h5>
                            <p>32 MEDIAN<br/> OUTSTANDING<br/>RESULTS</p>
                            <button>Book Now</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='slider-bg' style={{ backgroundImage: `url(${img3})` , filter: 'brightness(70%)' }}>
                            <h5>Salesian College</h5>
                            <p>AFTER SCHOOL<br/> LIVERPOOL<br/>CLINICS</p>
                            <button>Book Now</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                    <div className='slider-bg' style={{ backgroundImage: `url(${img4})` , filter: 'brightness(70%)' }}>
                            <h5>Salesian College</h5>
                            <p>ALUMNI<br/>BUSINESS<br/>LUNCH</p>
                            <button>Book Now</button>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* carousel end */}
        </>
    )
}

export default Carousel