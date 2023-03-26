import { useState, useEffect } from 'react';

function Countdown({ targetDate }) {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    });

    function calculateTimeLeft() {
        const difference = new Date(targetDate) - new Date();
        const timeLeft = {};

        if (difference > 0) {
            timeLeft.days = Math.floor(difference / (1000 * 60 * 60 * 24));
            timeLeft.hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            timeLeft.minutes = Math.floor((difference / 1000 / 60) % 60);
            timeLeft.seconds = Math.floor((difference / 1000) % 60);
        }

        return timeLeft;
    }

    return (
        <div className='flex gap-x-4 '>
            <div><span className='text-4xl font-bold'>{timeLeft.days}</span> <span>days</span> </div>
            <div><span className='text-4xl font-bold'>{timeLeft.hours} </span><span>hours</span> </div>
            <div><span className='text-4xl font-bold'>{timeLeft.minutes}</span><span>minutes</span> </div>
            <div><span className='text-4xl font-bold'>{timeLeft.seconds}</span> <span>seconds</span></div>
        </div>
    );
}

export default Countdown;



