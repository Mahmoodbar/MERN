import React , {useEffect, useState} from 'react'
import { Link, navigate } from '@reach/router'
import axios from 'axios'
import CrewForm from '../components/CrewForm'
import DeleteButton from '../components/DeleteButton'

const Main = () => {
    const [Pirates,setPirates] = useState([]);
    
    useEffect(() => {
       axios.get('http://localhost:8000/api/pirates')
       .then(res=>setPirates(res.data.pirates))
       
    } )

    const removeFromDom = pirateId => {
        setPirates(Pirates.filter(Pirates => Pirates._id != pirateId))
    }
    return (
        <div> 
           <Link to='/new'>Add a Pirate</Link>
           <CrewForm/>
  
      
              {Pirates.map((eachitem,i)=>{
                  return (
                      <>
                        <p>{eachitem.name}</p>
                            {eachitem.image}
                
                               <DeleteButton id={eachitem._id} removeFromDom ={()=>removeFromDom(eachitem._id)} />
                               <button> Dummy view </button>
                    </>
                  )
                  }
    )
}
</div>
    )}
       


export default Main
