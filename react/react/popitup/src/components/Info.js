import React, { Component } from 'react';

class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {
        Age: props.Age
        };
    }
    addAge = () => {this.setState({Age:this.state.Age+1})}

    render(){
  

        return (

            <div >
                <h1> Name: {this.props.name}</h1>
                <p> Age: {this.state.Age}</p>
                <p> Hair Color:{this.props.color} </p>
                <button onClick={ this.addAge }>Birthday button for {this.props.name}</button>
                <br></br>
                <br></br>
            </div>
            );
        }
}  
export default Info;