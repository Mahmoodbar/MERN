import React,{useState} from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import PirateForm from '../components/PirateForm'


const Create = () => {
    const [name, setName] = useState(""); 
    const [image, setImage]= useState("");
    const [treasure, setTreasure] = useState("");
    const [ position , setPosition] = useState("");
    const [ eye , setEye] = useState("");
    const [ hook , setHook] = useState("");
    const [ peg , setPeg] = useState("");
    
    const [Errors, setErrors] =useState([]);


    const onSubmitHandler = (name) => {
        console.log(name)
        axios.post('http://localhost:8000/api/pirates', 
            name,
            image , 
            treasure,
            position,
            eye,
            hook,
            peg


        )
        
    
            .then(res=>navigate("/"))
            .catch(err=>{
            
                const errorResponse = err.response.data.errors; 
                const errorArr = []; 
                for (const key of Object.keys(errorResponse)) { 
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })  
        }
    return (
        <div>
            <h1> Add Pirate </h1>
            <Link to="/pirate">Crew Board</Link>
            <PirateForm errors={Errors} name1="" successfulfunction={onSubmitHandler}  />

          
      
        </div>
    )
}

export default Create;