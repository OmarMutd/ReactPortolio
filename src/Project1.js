import React from 'react';
import Cart from "./cart.jpeg";
import './App.css';

export default function Project() {
    return (
        <div className="card one">
            <div className="item_item-card one">
                <div className="item_item-image">
                    <img className='project-image-header' src={Cart} alt='project1' />
                </div>

                <div className="product-information"></div>
                <div className='txt-box'>

                    <h4 className='app-name'>The Black Market</h4>
                    <p className='about-project'>This project was built with React, Express, and PSQL. It was made by a team of four in three weeks. It is an ecommcerce website that uses dummy data. It was made to show that as engineers we have an udnerstanding of how E-commerce apps work to employers. We built this app because a lot of companies like to sell things online, so showing that understanding of online business is paramount. </p>
                    <p className='about-project-2'><a href=
                        "https://github.com/OmarMutd/TBM-Client"
                        target="_blank"
                        rel="noopener noreferrer">
                        Github</a></p>
                    <p className='about-project-2'><a href=
                        "https://tbm-client.now.sh/"
                        target="_blank"
                        rel="noopener noreferrer">
                        Live</a></p>
                </div>
            </div>
        </div>
    )
}
