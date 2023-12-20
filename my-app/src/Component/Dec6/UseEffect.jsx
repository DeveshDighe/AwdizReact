import { useState , useEffect } from "react";


function UseEffect(){

    const [counter , SetCounter] = useState(0)
    
    function IncreaseCounter(){
        SetCounter ((previouVal) => previouVal+1)
    }

    function DecreaseCounter(){
        SetCounter ((previouVal) => previouVal-1)
    }
    
    useEffect(() =>{
        alert('Hii From UseEffect')
    })

    return (
        <div>
            <h1>UseEffect Page</h1>
            <button onClick={IncreaseCounter}>+</button>
            <p>{counter}</p>
            <button onClick={DecreaseCounter}>-</button>
        </div>
    )
}

export default UseEffect;