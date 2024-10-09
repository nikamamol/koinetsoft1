import React, { useState, useEffect } from 'react';

const Counter = () => {
    const [time, setTime] = useState(() => {
        // Retrieve the time from localStorage or initialize to 0
        const savedTime = localStorage.getItem('timer');
        return savedTime ? parseInt(savedTime, 10) : 0;
    });
    const [isCounting, setIsCounting] = useState(true); // Start counting when the component mounts

    useEffect(() => {
        const interval = setInterval(() => {
            if (isCounting) {
                setTime((prevTime) => {
                    const newTime = prevTime + 1; // Increment total time in seconds
                    localStorage.setItem('timer', newTime); // Save the new time in localStorage
                    return newTime;
                });
            }
        }, 1000); // Increment count every second

        // Cleanup function to clear interval
        return () => {
            clearInterval(interval);
        };
    }, [isCounting]);

    // Function to format time in hh:mm:ss
    const formatTime = (totalSeconds) => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        return `${hours} hours ${minutes} min ${seconds} sec`;
    };

    // Optional: Stop counting function
    const stopCounting = () => {
        setIsCounting(false);
    };

    return (
        <div>
            <h6 className='text-white mt-3 bg-info p-1 rounded'>{formatTime(time)}</h6>
            {/* <button onClick={stopCounting}>Stop Counting</button> */}
        </div>
    );
};

export default Counter;
