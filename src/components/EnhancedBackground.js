import React, { useEffect, useState } from "react";

const EnhancedBackground = (Component) => {
    
    const EnhancedBackground = (props) => {

        const {handleMouseMove} = props;

        return (
            <Component 
            {...props}
            handleMouseMove = {handleMouseMove} />
    )}
    return EnhancedBackground;
}

export default EnhancedBackground;