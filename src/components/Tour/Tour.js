import React, { useState } from 'react';
import './Tour.css';

const Tour = ({ id, name, info, image, price, removeTour }) => {
    const [readMore, setReadMore] = useState(false);

    return (
        <article className="Tour">
            <img src={image} alt={name} />
            <div className="tour-content">
                <div className="tour-title">
                    <h4>{name}</h4>
                    <h4 className="price">${price}</h4>
                </div>
                <p>
                    {readMore ? info : `${info.substring(0, 200)}...`}
                    <button
                        className="more-btn"
                        onClick={() => setReadMore(!readMore)}
                    >
                        {readMore ? 'See Less' : 'See More'}
                    </button>
                </p>
                <div className="text-center">
                    <button
                        className="btn remove-btn"
                        onClick={() => removeTour(id)}
                    >
                        Remove
                    </button>
                </div>
            </div>
        </article>
    );
};

export default Tour;
