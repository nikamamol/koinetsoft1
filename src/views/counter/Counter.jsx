import React, { useState, useEffect } from 'react';

const Counter = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        // Fetch the timer data from the backend every second
        const fetchTime = () => {
            fetch('http://localhost:5000/user/getallcounter')
                .then((response) => response.json())
                .then((data) => {
                    setTime(data.time); // Update time state
                })
                .catch((error) => console.error('Error fetching timer:', error));
        };

        const interval = setInterval(fetchTime, 1000); // Poll every second

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    // Function to format time in hh:mm:ss
    const formatTime = (totalSeconds) => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        return `${hours} hours ${minutes} min ${seconds} sec`;
    };

    return (
        <div>
            <h6 className='text-white mt-3 bg-info p-1 rounded'>{formatTime(time)}</h6>
        </div>
    );
};

export default Counter;
