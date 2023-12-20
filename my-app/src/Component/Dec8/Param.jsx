import React from 'react'
import { useParams } from 'react-router-dom'

function Param() {

    const {city} = useParams();
  return (
    <div>
        <h1>Params</h1>
        <p>He Lives in {city}</p>
    </div>
  )
}

export default Param