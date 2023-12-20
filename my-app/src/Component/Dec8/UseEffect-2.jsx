import { useEffect, useState } from "react";

function UseEffect2(){

    const [counter ,SetCounter] = useState(0);

    function IncreaseCounter(){
        SetCounter((prevVal) => prevVal + 1)
    }
    useEffect(() =>{
        alert('hii from useEffect')
    }, [])
    return(
        <div>
            <h1>UseEffect 2</h1>
            <button onClick={IncreaseCounter}>+</button>
            <p>{counter}</p>
        </div>
    )
}

export default UseEffect2;