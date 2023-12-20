import React, { useState } from 'react'

function Calculator() {
    const [value1 , SetValue1] = useState();
    const [value2 , SetValue2] = useState();
    const [calc , Setcalc] = useState();

    function valueOf1(e){
        SetValue1(Number(e.target.value))
    }

    function valueOf2(e){
        SetValue2(Number(e.target.value))
    }

    function calculate(){
       Setcalc(value1 + value2);
    }
  return ( 
    <div>
        <h1>Calculator</h1>
        <label htmlFor="">Enter 1st Value</label>
        <input type="text" onChange={valueOf1} /> <br />
        <label htmlFor="">Enter 2nd Value</label>
        <input type="text" onChange={valueOf2} /> <br />
        <input type="submit" onClick={calculate} />
        <h4>{calc}</h4>

    </div>
  )
}

export default Calculator