import React from 'react'

const Number = (props) => {
    let isNum = true;
    if (isNaN(+props.id)){
        isNum = false;
    }

    

    return (
        <div>
            { isNum ? <h1> the number is :{props.id}</h1> : <h1> the word is: {props.id} </h1>}
            
            
        </div>
    )
}

export default Number
