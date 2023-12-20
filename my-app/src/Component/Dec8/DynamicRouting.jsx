import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function DynamicRouting() {
    // const [ myage , setMyAge] = useState(20);
    
    // const userData = [{name : 'devesh' , id : 22} , {name : 'devya' , id : 30} , {name : 'arthur' , id : 1}]

    const router = useNavigate();
  return (
    <div>
        <h1>DynamicRouting</h1>
        <button onClick={() => router(`/UseParams/${30}`)}>Routing</button>
        
    </div>
  )
}

export default DynamicRouting