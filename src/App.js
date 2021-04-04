import React, { useEffect, useState } from 'react';
import Loading from './components/Loading/Loading';
import Tours from './components/Tours/Tours';

const URL = 'https://course-api.com/react-tours-project';

function App() {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchTour = async () => {
        setLoading(true);
        try {
            const response = await fetch(URL);
            const data = await response.json();
            setLoading(false);
            setTours(data);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    const removeTour = (id) => {
        const newTours = tours.filter((tour) => tour.id !== id);
        setTours(newTours);
    };

    useEffect(() => {
        fetchTour();
    }, []);

    if (loading) {
        return (
            <main>
                <Loading />
            </main>
        );
    }

    if (tours.length === 0) {
        return (
            <main>
                <section className="title">
                    <h3>No Tours Found</h3>
                    <button
                        className="btn refresh-btn"
                        onClick={() => fetchTour()}
                    >
                        Refresh
                    </button>
                </section>
            </main>
        );
    }

    return (
        <main>
            <Tours tours={tours} removeTour={removeTour} />
        </main>
    );
}

export default App;
