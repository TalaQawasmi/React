import React from 'react';
const NewComponent = props => {
    return(
        <div>
            <h1>{ props.LastName }, { props.firstName }</h1>
            <p>Age: { props.Age }</p>
            <p>Hair Color: { props.HairColor }</p>
        </div>
    );
}
export default NewComponent;