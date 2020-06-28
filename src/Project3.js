import React from 'react';
// import Sopranos from "./sopranos.jpeg";
import Sopranos from "./sopranos2.jpeg";

export default function Project3() {
    return (
        <div className="card">
            <div className="item_item-card one three">
                <div className="item_item-image">
                    <img className='project-image-header' src={Sopranos} alt='project1' />
                </div>

                <div className="product-information"></div>
                <div className='txt-box'>
                    <h4 className='app-name'>Sopranos</h4>
                    <p className='about-project'>This project was built with React, Express, and PSQL. It was made for my family owned buisness. It is a website which shows off a extensive Italian Menu. The reason for building this app was to offer a better looking menu than the one we previously had so that customers could have a better experience.</p>
                    <p className='about-project-2'><a href=
                        "https://github.com/OmarMutd/sp"
                        target="_blank"
                        rel="noopener noreferrer">
                        Github</a></p>
                    <p className='about-project-2'><a href=
                        "https://sopranos-pizzas.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer">
                        Live</a></p>
                </div>
            </div>
        </div>
    )
}
