import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/Header.css"

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <>
            {/* Header Start */}
            <nav className="navbar p-4 navbar-expand-lg navbar-light bg-white custom">
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    {/* Left: Menu Icon */}
                    <div className="d-flex align-items-center custom-menu">
                        <i className="fa-solid fa-bars menu-icon" onClick={toggleMenu}></i>
                        <button className="btn fw-bold" onClick={toggleMenu}>MENU</button>
                    </div>

                    {/* Center: Logo */}
                    <div className="mx-auto salesian">
                        {/* <img src="https://www.salesian.vic.edu.au/app/themes/sallesian-college/dist/images/logo.png" alt="Salesian College" className="img-fluid web-img" style={{ height: '75px' }} /> */}
                        <img src="https://affyclouditsolutions.com/static/media/affy_logo.7354960bda008279c013.png" alt="Affy" className="img-fluid" style={{ height: '80px' }} />

                    </div>

                    {/* Right: Enroll Now & Book a Tour Links */}
                    {/* <div className="d-flex align-items-center">
                        <a className="nav-link fw-bold me-3" style={{color:'#1C2A48'}} href="#">ENROL NOW</a>
                        <a className="nav-link text-danger fw-bold" href="#">BOOK A TOUR</a>
                    </div> */}
                </div>
            </nav>

            {/* Full-screen Menu */}
            {isMenuOpen && (
                <div className="position-fixed top-0 start-0 w-100 h-100 bg-white" style={{ zIndex: 1050 }}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 d-flex justify-content-between align-items-start pt-3">
                                <button className="btn text-dark" onClick={toggleMenu}>
                                    ✕ CLOSE
                                </button>
                                <img src="https://affyclouditsolutions.com/static/media/affy_logo.7354960bda008279c013.png" alt="Affy" className="img-fluid" style={{ height: '80px' }} />
                                {/* <div>
                                    <a className="btn btn-primary me-2" href="#">ENROL NOW</a>
                                    <a className="btn btn-danger" href="#">BOOK A TOUR</a>
                                </div> */}
                            </div>
                            <div className="col-6 pt-5">
                                <h2 className="mb-4">ABOUT US</h2>
                                {/* <h2 className="mb-4">LEARNING</h2>
                                <h2 className="mb-4">MASTERPLAN</h2>
                                <h2 className="mb-4">ENROLMENT</h2>
                                <h2 className="mb-4">COMMUNITY</h2> */}
                                <h2 className="mb-4">Why us</h2>
                                <h2 className="mb-4 text-danger">NEWS</h2>
                                <h2 className="mb-4">POLICIES</h2>
                                <h2 className="mb-4">CONTACT US</h2>
                            </div>
                            {/* <div className="col-6 pt-5">
                                <h3 className="mb-4">OVERVIEW</h3>
                                <h3 className="mb-4">PUBLICATIONS</h3>
                                <h3 className="mb-4">BLOG</h3>
                                <h3 className="mb-4">WE ARE SALESIAN</h3>
                                <h3 className="mb-4">EVENTS</h3>
                            </div> */}
                            <div className="col-12 position-absolute bottom-0 end-0 p-3">
                                <div className="d-flex justify-content-end align-items-center">
                                    <span className="me-3">📞</span>
                                    <span className="me-3">📍</span>
                                    <span className="me-3">🔍</span>
                                    <button className="btn btn-danger">
                                        LOGIN
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* Header End */}
        </>
    );
};

export default Header;