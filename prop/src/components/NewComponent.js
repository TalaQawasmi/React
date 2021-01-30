import React, { Component } from 'react';

class NewComponent extends Component{
    render(){
        const {firstName, LastName, Age, HairColor} = this.props;
        return(
            <div>
                <h1>{firstName} {LastName}</h1>
                <p>Age: {Age}</p>
                <p>Hair Color: {HairColor}</p>
            </div>
        )
    }
}
export default NewComponent;