import React from 'react';

const pacman=(props)=>{
    let pacStyle={
        width: "0px",
        height: "0px",
        borderRight: "60px solid transparent",
        borderTop: "60px solid "+props.color,
        borderLeft: "60px solid " +props.color,
        borderBottom: "60px solid " +props.color,
        borderTopLeftRadius: "60px",
        borderTopRightRadius: "60px",
        borderBottomLeftRadius: "60px",
        borderBottomRightRadius: "60px"
    };
    return(
        <div style={pacStyle}>
        </div>
    );
}

export default pacman;