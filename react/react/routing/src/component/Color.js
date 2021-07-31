import React from 'react'

    

const Color = (props) => {
    const colors = {
        color : props.color , 
        background : props.background
    }

    return (
        <div>
            <div style ={colors}>
                
                <h1> the word is :{props.id} </h1>
                
                 </div>
            
            
        </div>
    )
}

export default Color
