import React from 'react';
import Cart from "./cart.jpeg";

export default function Project() {
    return (
        <div className="card">
            <div className="item_item-card">
                <div className="item_item-image">
                    <img src={Cart} alt='project1' />
                </div>

                <div className="product-information"></div>
                <p>This project was built with React, Express, and PSQL. It was made by a team of four in three weeks. It is an ecommcerce website that uses dummy data.</p>
                <p><a href=
                    "https://github.com/OmarMutd/TBM-Client"
                    target="_blank"
                    rel="noopener noreferrer">
                    Github</a></p>
                <p><a href=
                    "https://tbm-client.now.sh/"
                    target="_blank"
                    rel="noopener noreferrer">
                    Live</a></p>
            </div>
        </div>
    )
}
