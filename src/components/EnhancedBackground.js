import React, { useEffect, useState } from "react";
import CharacterList from "./CharacterList";

const EnhancedBackground = (Component) => {
    
    const EnhancedBackground = (props) => {
        const [coordinates, setCoordinates] = useState({});

        const {background} = props;

        const handleMouseMove = (e) => {
            setCoordinates({
                x: e.clientX - e.target.offsetLeft,
                y: e.clientY - e.target.offsetTop
            })
        }

        return (
            <Component 
            {...props}
            handleMouseMove = {handleMouseMove} />
    )}
    return EnhancedBackground;
}

export default EnhancedBackground;