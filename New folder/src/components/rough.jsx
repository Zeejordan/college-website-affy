<div className="container-fluid custom-section">
                <div className="first-half">
                    <div className="about-heading">
                        <p><span>__</span></p>
                        <h6>About Us</h6>
                    </div>
                    <div className='captions'>
                        <h4>SOME CONTENT TO DISPLAY</h4>
                    </div>
                </div>
                <div className="second-half">
                    {/* carousel start */}
                    <div id="aboutSlider" className="carousel slide">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#aboutSlider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#aboutSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#aboutSlider" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={img2} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Firstaaa slide label</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={img3} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Second slide label</h5>
                                    <p>Some representative placeholder content for the second slide.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={img4} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Third slide label</h5>
                                    <p>Some representative placeholder content for the third slide.</p>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#aboutSlider" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#aboutSlider" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    {/* carousel end */}
                </div>
            </div>
*/

// https://www.salesian.vic.edu.au/app/themes/sallesian-college/dist/images/logo.png


<button className="btn text-dark custom-close-button" onClick={toggleMenu}>
                                    ✕ CLOSE
                                </button>