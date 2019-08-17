import React from 'react';


const dot=(props)=>{
        let dotStyle={
            width: "20px",
            height: "20px",
            background: props.color,
            borderRadius: "50%"
        };
        return(            
                <div>
                    <div style={dotStyle}></div>
                </div>
        );

}

export default dot;