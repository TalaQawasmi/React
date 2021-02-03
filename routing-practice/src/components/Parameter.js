import React from 'react'

const Parameter = (props) => {
    const type = isNaN(props.para)? "word":"number";
    return (
        <div>
            <h1>The {type} is: {props.para}</h1>
        </div>
    )
}

export default Parameter
