import { useState } from 'react';
import './../Styles/Login.css'
import {Para} from './Dec10/ChildrenProp'




function Login(){

    const [isLoggedIn, SetIsLoggedIn] = useState(false)

    function Change(){
        SetIsLoggedIn((Status)=> !Status)
    }

    return (

        
        <div>
            <p>Login Page</p>
            {isLoggedIn ? <button onClick={Change} >LogOut</button> : <button onClick={Change}>Login</button>}
            <Para>Imported Children Prop from Children Prop</Para>
        </div>
    )
}

export default Login;