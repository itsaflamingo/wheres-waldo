import React, {useEffect, useState} from 'react';

export default function Timer(props) {

    const [timer, setTimer] = useState(0);

    const {showInput, setTime} = props;

    useEffect(() => {
        const interval = setInterval(() => {
          setTimer(timer => timer + 1);
        }, 1000);
        
        return () => {
          if(showInput === false) return;
          clearInterval(interval)
        };
    });

    return(
        <div id='timer'>
            <span>{('0'+ Math.floor((timer/60000) % 60)).slice(-2)}:</span>
            <span>{('0'+ Math.floor((timer/1000) % 60)).slice(-2)}</span>
        </div>
    )
}