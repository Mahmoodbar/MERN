import React , {useEffect, useState} from 'react'
import { Link, navigate } from '@reach/router'
import axios from 'axios'
import Delete from '../components/Delete'

const Main = () => {
    const [Authors,setAuthors] = useState([]);
    
    useEffect(() => {
       axios.get('http://localhost:8000/api/authors')
       .then(res=>setAuthors(res.data.authors))
       
    } )

    const removeFromDom = authorId => {
        setAuthors(Authors.filter(Authors => Authors._id != authorId))
    }
    return (
        <div>
           <h1>Favorite Authors</h1>
           <Link to='/new'>Add an Author</Link>
           <p>We have Qoutes by :</p>
           <center>
           <table>
               <thead>
               <tr>
            <th>Authors</th>
            <th>Actions Available</th>
            </tr>
               </thead>
         
          <tbody>
              {Authors.map(
                  (eachitem,i)=>{
                      return <tr> 
                          <td>{eachitem.name}</td>
                          <td> <button onClick = {()=> {navigate('/edit/'+eachitem._id)}}> Edit</button>
                               <Delete id={eachitem._id} removeFromDom ={()=>removeFromDom(eachitem._id)} />
                         </td>
                      </tr>
                      
                  }  
              )
                  }


          </tbody>

           </table>
           </center>

            
        </div>
    )
}

export default Main
