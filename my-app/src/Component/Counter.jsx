
import { useState } from 'react';
import '../Styles/Counter.css'


function Counter(){

    const [counter , CounterValue] = useState(0);
    function IncreaseCounter(){
        if (counter<10) {
            CounterValue ((product) => product+1)
        }
        
    }

    function DecreaseCounter(){
        if (counter>0){
            CounterValue ((product) => product-1)
        }
        
    }
    return(
        <div>
            <p>Counter</p>
            <button onClick={IncreaseCounter}>+</button>
            <span>{counter}</span>
            <button onClick={DecreaseCounter}>-</button>
        </div>
    )
}

export default Counter;