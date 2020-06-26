import React from 'react';
import Sopranos from "./sopranos.jpeg";

export default function Project3() {
    return (
        <div className="card">
            <div className="item_item-card">
                <div className="item_item-image">
                    <img src={Sopranos} alt='project1' />
                </div>

                <div className="product-information"></div>
                <p>This project was built with React, Express, and PSQL. It was made for my family owned buisness.</p>
                <p><a href=
                    "https://github.com/OmarMutd/sp"
                    target="_blank"
                    rel="noopener noreferrer">
                    Github</a></p>
                <p><a href=
                    "https://sopranos-pizzas.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer">
                    Live</a></p>
            </div>
        </div>
    )
}
