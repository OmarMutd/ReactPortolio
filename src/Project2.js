import React from 'react';
// import MapImage from "./MapImage.png";
import MapImage from "./MapImage3.jpeg";
import './App.css';

export default function Project2() {
    return (
        <div className="card one">
            <div className="item_item-card one">
                <div className="item_item-image">
                    <img className='project-image-header' src={MapImage} alt='project1' />
                </div>

                <div className="product-information"></div>
                <div className='txt-box'>
                    <h4 className='app-name'>Refuge Maps</h4>
                    <p className='about-project'>This project was built with Jquery, HTML and CSS. This app uses google maps api to show locations of nearby refuges for those who are in need. The intended audience is those who belong to the LGBT+ community who are in need of a safe spaces. We built this app because we wanted to build something both useful and interesting as well as unique. </p>
                    <p className='about-project-2'><a href=
                        "https://github.com/ljspiek/refuge_app"
                        target="_blank"
                        rel="noopener noreferrer">
                        Github</a></p>
                    <p className='about-project-2'><a href=
                        "https://ljspiek.github.io/refuge_app/"
                        target="_blank"
                        rel="noopener noreferrer">
                        Live</a></p>
                </div>
            </div>
        </div>
    )
}
