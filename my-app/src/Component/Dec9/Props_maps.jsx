import React from 'react'

function Props_maps(props) {
  const func = props.func
  const Arrobj = props.Arrobj
  return (
    <div>
      <h1>Props_maps</h1>
      <p></p>
      <p onClick={() => func()}>{Arrobj.map((element) => (
        <span style={{ display: 'block', color: 'red' }}>{element}</span>
      ))}</p>

    </div>
  )
}

export default Props_maps