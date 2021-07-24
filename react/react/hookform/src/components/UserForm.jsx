import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [userError, setUError] = useState ("");

    const [email, setEmail] = useState("");
    const [emailError, setEError] = useState ("");

    const [password, setPassword] = useState("");
    const [passwordError, setPError] = useState ("");

    const [confpassword, setconfPassword] = useState("");  
    const [confirmError, setCError] = useState ("");

    
    const UserError = (e) => {
     

    setUsername(e.target.value);
    if(e.target.value.length < 2) {
        setUError("must be 2 char");
    }else {setUError("")}
    };

 const EmailError = (e) => {
    
    setEmail(e.target.value);
    if(e.target.value.length < 2) {
        setEError("email must be at least 2 char");
    } else {setEError("")}
    };

 const passError = (e) => {
    
    setPassword(e.target.value);
    if(e.target.value.length < 8) {
        setPError("password must be at least 8 char ");
    } else {setPError("")}
    };

 const confError = (e) => {
    
    setconfPassword(e.target.value);
    if(e.target.value.length < 2) {
        setCError("Title is required!");
    } else {setCError("")}
    };
    
    
    return(
    <>
        <form onSubmit= {  (e) => e.preventDefault() }>
            <div>
                <label>Username: </label> 
                <input type="text" onChange={ UserError} />
                
                  {userError?  <p>   {userError}  </p> : ''}

                
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ EmailError} />
               
                {emailError?  <p>   {emailError}  </p> : ''}
            </div>
            <div>
                <label>Password: </label>
                <input type="password"  onChange={ passError}/>
                
                {passwordError?  <p>   {passwordError}  </p> : ''}
            </div>
             <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ confError } />
                
                {confirmError?  <p>   {confirmError}  </p> : ''}
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