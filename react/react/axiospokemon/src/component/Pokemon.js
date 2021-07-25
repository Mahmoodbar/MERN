import React , {useState} from 'react'
import axios from 'axios';


const Pokemon = () => {
    const [name,setName] = useState([]);
const [error,setError] = useState('');

const handleclick = (e) => {

    axios.get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=200")    
    .then( respond =>setName(respond.data.results)) 
    .catch((error) =>setError("Error"))
}

return (
    <div>

        <button onClick={handleclick}>Fetch Pokemon</button>

        <ul>
        {name.map((item,index) => <li key={index}> {item.name} </li>)  }
        </ul>

    </div>
)
}

export default Pokemon
