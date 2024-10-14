import React, { useState, useEffect } from 'react';

const Counter = () => {
    const [time, setTime] = useState(() => {
        const savedTime = localStorage.getItem('timer');
        return savedTime ? parseInt(savedTime, 10) : 0;
    });
    const [startTime, setStartTime] = useState(() => {
        const savedStartTime = localStorage.getItem('startTime');
        return savedStartTime ? parseInt(savedStartTime, 10) : Date.now();
    });
    const [isCounting, setIsCounting] = useState(true);

    useEffect(() => {
        if (isCounting) {
            const interval = setInterval(() => {
                const currentTime = Date.now();
                const elapsedTime = Math.floor((currentTime - startTime) / 1000);
                const totalTime = time + elapsedTime;

                setTime(totalTime);
                // localStorage.setItem('timer', totalTime);
            }, 1000);

            // Store the start time in localStorage so it persists
            localStorage.setItem('startTime', startTime);

            return () => {
                clearInterval(interval);
            };
        }
    }, [isCounting, startTime]);

    // Function to format time in hh:mm:ss
    const formatTime = (totalSeconds) => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        return `${hours} hours ${minutes} min ${seconds} sec`;
    };

    const stopCounting = () => {
        setIsCounting(false);
    };

    return (
        <div>
            {/* <h6 className='text-white mt-3 bg-info p-1 rounded'>{formatTime(time)}</h6> */}
            {/* <button onClick={stopCounting}>Stop Counting</button> */}
        </div>
    );
};

export default Counter;
