import React, { Component } from 'react';


class NewComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            Age : this.props.Age,
        }
    }
    birthday =()=>{
        this.setState({Age : this.state.Age +1});
    }
    render(){
        const {firstName, LastName, HairColor} = this.props;
        const {Age} = this.state;
        return(
            <div>
                <h1>{firstName} {LastName}</h1>
                <p>Age: {Age}</p>
                <p>Hair Color: {HairColor}</p>
                <button onClick={this.birthday}>Birthday Button for {firstName}{LastName}</button>
            </div>
        )
    }
    
    
}
export default NewComponent;