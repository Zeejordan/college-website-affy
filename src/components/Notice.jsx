import React from 'react';
import "../css/NoticeStyle.css";

export const Notice = () => {
    return (
        <div className="container-fluid mt-3 sticky-container">
            <div className="row">
                {/* Card Column */}
                <div className="col-12">
                    <div className="card custom-card sticky-card">
                        <div className="card-body custom-card-body">
                            <h5 className="card-title custom-title" style={{ color: 'white' }}>Notice</h5>
                            <ul className="list">
                                <li>NOTICE 1</li>
                                <li>NOTICE 2</li>
                                <li>NOTICE 3</li>
                                <li>NOTICE 4</li>
                                <li>NOTICE 5</li>
                                <li>NOTICE 6</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
