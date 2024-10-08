import React from 'react';
import "../css/ImportantLinksStyle.css";

export const ImportantLinks = () => {
    return (
        <>
            <div className="container-fluid mt-3 custom-card">
                <div className="row">
                    {/* Card Column */}
                    <div className="col-12">
                        <div className="card sticky-card">
                            <div className="card-body custom-card-body">
                                <h5 className="card-title custom-title" style={{ color: 'white' }}>IMPORTANT LINKS</h5>
                                <p className="card-text">
                                    <ul className="list">
                                        <li>LINK 1</li>
                                        <li>LINK 2</li>
                                        <li>LINK 3</li>
                                        <li>LINK 4</li>
                                        <li>LINK 1</li>
                                        <li>LINK 2</li>
                                        <li>LINK 3</li>
                                        <li>LINK 4</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
