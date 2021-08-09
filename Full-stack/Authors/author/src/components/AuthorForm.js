import React, { useState } from 'react'
import axios from 'axios';

const AuthorForm = () => {
    const [Name, setName] = useState(""); 

    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/people', {
            Name,
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
    return (
    <form onSubmit={onSubmitHandler}>
            <p>
                <label>Name</label><br/>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={Name}/>
            </p>
            <input type="submit"/>
        </form>
    )
}
export default AuthorForm;