import React, {useState} from 'react'

const Pokemon = () => {
    const [name,setName] = useState([]);
    const [error,setError] = useState("");

    const handleclick = (e) => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=200")  
        .then(respond => respond.json())  
        .then( respond =>setName(respond.results)) 
        .catch(error => setError("No DATA"))
    }

    return (
        <div>
            <button onClick={handleclick}>Fetch Pokemon</button>
            <ul>
            {name.map((item,index)=> <li key={index}> {item.name} </li>)  }
            </ul>


            
        </div>
    )
}

export default Pokemon
