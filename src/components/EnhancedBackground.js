import React, { useEffect, useState } from "react";

const EnhancedBackground = (Component) => {
    
    const EnhancedBackground = (props) => {
        const {handleMouseMove} = props;
        const [timer, setTimer] = useState(0);

        useEffect(() => {
            setInterval(() => {
                setTimer(timer => timer + 1);
              }, 1000);
        })


        return (
            <Component 
            {...props}
            handleMouseMove = {handleMouseMove}
            timer={timer} />
    )}
    return EnhancedBackground;
}

export default EnhancedBackground;