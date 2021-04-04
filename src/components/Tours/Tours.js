import React from 'react';
import Tour from '../Tour/Tour';
import './Tours.css';

const Tours = ({ tours, removeTour }) => {
    return (
        <section className="Tours">
            <div className="title">
                <h3>Our Tours</h3>
                <div className="under-line"></div>
            </div>
            <div>
                {tours.map((tour) => (
                    <Tour {...tour} removeTour={removeTour} key={tour.id} />
                ))}
            </div>
        </section>
    );
};

export default Tours;
