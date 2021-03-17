import React from 'react';

const HelloColors = ({str, textColor, bgColor}) => {
    return(
        <div style={{color: textColor, backgroundColor: bgColor}}>
            <h1>The word is: {str}</h1>
        </div>
    )
}

export default HelloColors;