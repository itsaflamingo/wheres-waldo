import React, { useEffect, useState } from "react";
import CharacterList from "./CharacterList";

const EnhancedBackground = (Component) => {
    
    const EnhancedBackground = (props) => {

        const {background, handleMouseMove} = props;

        return (
            <Component 
            {...props}
            handleMouseMove = {handleMouseMove} />
    )}
    return EnhancedBackground;
}

export default EnhancedBackground;