import React from 'react'
import '../Dec9/MapObjects.css'

function MapObjects(props) {
  const ArrOfOb = props.ObjectArray;
  console.log(ArrOfOb)
  return (
    <div>
      <h1>MapObjects</h1>
      <div id='Data'>
        {ArrOfOb.map((objElement) =>(
          
          <div>
          <div id='imgDiv'><img  className='img' src={objElement.image} alt="" /></div>
          <div><h1>{objElement.name}</h1></div>
          <div><p>{objElement.feild}</p></div>
          </div>
          
        ))}
      </div>
      
    </div>
  )
}

export default MapObjects