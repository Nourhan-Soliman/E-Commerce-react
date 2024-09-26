import React from 'react';
import './Slider.css';
function Slider() {
    return (
        <>
            <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={require('./Assets/download.png')} className="d-block w-100 hight-500" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img src={require('./Assets/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.avif')} className="d-block w-100 hight-500" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img src={require('./Assets/images.jpeg')} className="d-block w-100 hight-500" alt="Third slide" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}

export default Slider;
