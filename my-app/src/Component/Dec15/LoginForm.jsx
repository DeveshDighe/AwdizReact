import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Route, useNavigate } from 'react-router-dom';

function LoginForm() {
    const [Text, SetText] = useState({ email: '', password: '' })
    console.log(Text);

    const router = useNavigate();

    function detectChange(event) {
        SetText({ ...Text, [event.target.name]: event.target.value })
    }

    async function submitDetect(event) {
        event.preventDefault();

        if (Text.email && Text.password) {
            try {

                // const response = await axios.post('http://localhost:8000/login', { loginData })
                const response = { data: { success: true, message: 'Login Successful' } }

                if(response.data.success == true){
                    toast.success(response.data.message)
                    SetText({ email: '', password: '' })
                    router('/')
                }


            } catch (error) {
                console.log(error)
                toast.error(error.response.data.error)
            }
        }

        else {
            toast('All Fields Are Mandatory')
        }

    }
    return (
        <div>
            <h1>LoginForm</h1>
            <form action="" onSubmit={submitDetect}>
                <label htmlFor="">Email</label><br />
                <input type="email" onChange={detectChange} name='email'  value={Text.email}/><br />
                <label htmlFor="">Password</label><br />
                <input type="password" onChange={detectChange} name='password' value={Text.password} /><br /><br />
                <input type="submit" />
                
            </form>
        </div>
    )
}

export default LoginForm