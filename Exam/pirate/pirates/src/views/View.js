import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import PirateForm from '../components/PirateForm'
import CancelButton from '../components/CancelButton';


const View = (props) => {
    const {id}=props;
    const [name, setName] = useState(""); 
    const [image, setImage]= useState("");
    const [treasure, setTreasure] = useState("");
    const [ position , setPosition] = useState("");
    const [ eye , setEye] = useState("");
    const [ hook , setHook] = useState("");
    const [ peg , setPeg] = useState("");

    useEffect(() => {
        axios.get('http://localhost:8000/api/pirates/' + id)
            .then(res => {
                setPirate(res.data);
                console.log(res.data);
                setLoaded(true);
            })
    }, [])

    const onSubmitHandler = (name) => {
        axios.put('http://localhost:8000/api/pirates/'+id, 
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
            <h1>About</h1>
        
            {loaded && (
        <PirateForm errors={Errors} name1={pirate.name} successfulfunction={onSubmitHandler} />
            )}
        
        </div>
    )
}

export default View