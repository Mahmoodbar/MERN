import React, { useState } from 'react'
import axios from 'axios';

const PirateForm = () => {
    const [name, setName] = useState(); 
    const [image, setImage]= useState();
    const [treasure, setTreasure] = useState();
    const [ position , setPosition] = useState();
    const [ eye , setEye] = useState(false);
    const [ hook , setHook] = useState(false);
    const [ peg , setPeg] = useState(false);
    const [ error , setError] = useState( {
        
    image:{message:""},
    name: {message:""},
    treasure: {message:""},
    position: {message:""}
 
}
    );
    

    const onSubmitHandler = e => {
      
        e.preventDefault();
        console.log( name,
            image , 
            treasure,
            position,
            eye,
            hook,
            peg);

        axios.post('http://localhost:8000/api/pirates', {
            name,
            image , 
            treasure,
            position,
            eye,
            hook,
            peg
        })
            .then(err=>setError(err.data.error.errors))
            .catch(err=>setError(err.data.error.errors))
    }
    console.log(error);
    return (
    <form onSubmit={onSubmitHandler}>
         
           <div>

           {error && error.name ? error.name.message:"" }
            <p>
                <label>Pirate Name</label><br/>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
              
            </p>

            {error && error.image ? error.image.message: ""}
            <p> 
            <label> Image Url</label> <br/>
            <input type="text" onChange={(e)=>setImage(e.target.value)} value={image}/>

            </p>

            {error && error.treasure ? error.treasure.message: ""}
            <p>
            <label> # of treasure Chests</label> <br/>
           <input type="number" onChange={(e)=>setTreasure(e.target.value)} value={treasure}/>

            </p>
            </div>


            {error && error.position ? error.position.message: ""}
             <p>
            <label> crew positions:</label> <br/>
            
            <select name="cars" id="cars" onChange={(e)=>setPosition(e.target.value)} value={position}>
                <option value="captain">Captain</option>
                <option value="first Mate">First Mate </option>
                <option value="boatswain">boatswain</option>
                <option value="PowderMonkey">Powder Monkey</option>
                </select>

            </p>

            
            <input type="checkbox" onChange={(e)=>setEye(e.target.value)} value={eye}/>
                <label for="vehicle1"> Peg Leg </label><br/>
                <input type="checkbox" onChange={(e)=>setHook(e.target.value)} value={hook}/>
                <label for="vehicle2"> Eye Patch</label><br/>
                <input type="checkbox" onChange={(e)=>setPeg(e.target.value)} value={peg}/>
                <label for="vehicle3"> Hook Hand</label><br/>
              
                            

             
             <input type="submit" value ="Add Pirate "/>
         
        </form>
       

    )
}
export default PirateForm;