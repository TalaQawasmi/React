import React, { Component } from 'react';

class NewComponent extends Component{
    render(){
        return(
            <div>
                {this.props.firstName}
                {this.props.LastName}
                {this.props.Age}
                {this.props.HairColor}
            </div>
        )
    }
}
export default NewComponent;