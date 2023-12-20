import { useEffect, useState } from "react";

function UseEffect3(){

    const [counter ,SetCounter] = useState(0);

    const [counter2 ,SetCounter1] = useState(0);

    function IncreaseCounter(){
        SetCounter((prevVal) => prevVal + 1)
    }
    function IncreaseCounter1(){
        SetCounter1((prevVal) => prevVal + 1)
    }
    useEffect(() =>{
        alert('hii from useEffect')
    }, [counter])
    return(
        <div>
            <h1>UseEffect 3</h1>
            <button onClick={IncreaseCounter}>+</button>
            <p>{counter}</p>
            <button onClick={IncreaseCounter1}>+</button>
            <p>{counter2}</p>
        </div>
    )
}

export default UseEffect3;
