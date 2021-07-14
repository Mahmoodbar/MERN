import React, { Component } from 'react';

class Info extends Component {
   

    render() {
        return (

            <div>
                <h1> Name: {this.props.name}</h1>
                <p> Age: {this.props.Age}</p>
                <p> Hair Color:{this.props.color} </p>
            </div>
            )
        }
}  
export default Info;