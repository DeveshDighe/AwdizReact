import React from 'react'
import '../Dec10/ChildrenProp.css'

const Para = ({children}) =>{
  // return <p style={{ color : 'red'}} >{children}</p>
  // inline style
  // Or 
  // External styling
  return <p className='Aj'  >{children}</p>
}

function ChildrenProp() {
  return (
    <div>
      <h1>ChildrenProp</h1>
      <Para>This is example of Children Prop</Para>
    </div>
  )
}

export default ChildrenProp
export {Para};