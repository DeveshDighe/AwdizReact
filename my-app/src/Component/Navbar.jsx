import './../Styles/Navbar.css'
import './../Styles/Global.css'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types';
import { useState } from 'react';



function Navbar(props) {
    const router = useNavigate();
    const [City, SetCity] = useState('Kalyan');
    const value = props.title || 'Hello'
    const obj = props.Arrobj;
    console.log(obj)
    return (
        <>
            <div className='Navbar'>
                <div className='flex w-15'><p onClick={() => router('/')}>Home</p></div>
                <div className='flex w-45'>
                    <p>{value}</p>
                    <p>{props.value}</p>
                    <p onClick={() =>props.func()}>Kids</p>
                </div>
                <div className='flex w-25'>
                    <p onClick={() => router('/loginForm')} >Login</p>
                    <p onClick={() => router('/registerForm')} >Register</p>
                </div>
            </div>
            <button onClick={() => router(`Params/${City}`)}>Click Here</button>
            <div>
                {props.Arrobj.map((element)=>(
                    <h3>{element}</h3>
                ))}
            </div>
        </>
    )
}




export default Navbar;


Navbar.propTypes = {
    title: PropTypes.string
}

Navbar.defaultProps = {
    title: 'Default props'
}