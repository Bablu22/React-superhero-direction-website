import React from 'react';
import './Banner.css'
import Background from '../../background.jpg'
const Banner = () => {
    return (
        <div>
            <div className="row w-100 d-flex justify-content-between align-items-center">
                <div className="col-md-7">
                    <div className="banner-left">
                        <h1>Hiring Web Developers for your  <span className="text-danger">Startup</span></h1>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="banner-right">
                        <img src={Background} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;