import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const DeleteButton = (props) => {
    const { removeFromDom, id} = props;
    
   const deletepirate =()=>{
        axios.delete("http://localhost:8000/api/pirates/"+id )
        .then(res =>  removeFromDom());
}


    return (
        <div>
            <button onClick={deletepirate}>Delete</button>
        </div>
    )
}

export default DeleteButton;