import React from 'react'

const Colors = (props) => {
    const type = isNaN(props.para)? "word":"number";

    const one ={backgroundColor:props.bc, color:props.c};
    return (
        <div>
            <h1 style={one}>The {type} is: {props.para}</h1>
        </div>
    )
}

export default Colors
