import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confpassword, setconfpassword] = useState("");  
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password ,confpassword };
        console.log("Welcome", newUser);
    };
    
    return(
    <>
        <form onSubmit={ createUser }>
            <div>
                <label>Username: </label> 
                <input type="text" onChange={ (e) => setUsername(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value) } />
            </div>
             <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ (e) => setconfpassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
        </form>
<p>{username}</p>
<p>{email}</p>
<p>{password}</p>
<p>{confpassword}</p>
</>
    );

};

    
export default UserForm;