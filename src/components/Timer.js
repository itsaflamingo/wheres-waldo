import React, {useEffect, useState} from 'react';

export default function Timer() {

    const [timer, setTimer] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setTimer(timer => timer + 1);
        }, 1000);

        return () => {
          clearInterval(interval)
        };
    }, []);

    return(
        <div id='timer'>
            <span>{('0'+ Math.floor((timer/3600) % 60)).slice(-2)}:</span>
            <span>{('0'+ Math.floor((timer/60) % 60)).slice(-2)}:</span>
            <span>{('0'+ Math.floor((timer) % 60)).slice(-2)}</span>
        </div>
    )
}