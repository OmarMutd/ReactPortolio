import React from 'react';
import MapImage from "./MapImage.png";

export default function Project2() {
    return (
        <div className="card">
            <div className="item_item-card">
                <div className="item_item-image">
                    <img src={MapImage} alt='project1' />
                </div>

                <div className="product-information"></div>
                <p>This project was built with Jquery, HTML and CSS.</p>
                <p><a href=
                    "https://github.com/ljspiek/refuge_app"
                    target="_blank"
                    rel="noopener noreferrer">
                    Github</a></p>
                <p><a href=
                    "https://ljspiek.github.io/refuge_app/"
                    target="_blank"
                    rel="noopener noreferrer">
                    Live</a></p>
            </div>
        </div>
    )
}
