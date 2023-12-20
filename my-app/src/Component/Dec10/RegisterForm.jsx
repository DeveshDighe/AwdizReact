import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function RegisterForm() {
  const router = useNavigate();

  
  const [userData, SetuserData] = useState({ name: '', email: ' ', password: '', confirmPassword: '' });
  console.log(userData, 'userData')

  async function HandleSubmit(event) {
    event.preventDefault();

    if (userData.email && userData.password && userData.name && userData.confirmPassword) {
      if (userData.password === userData.confirmPassword) {

        try{
          // const response = await axios.post('htttp://localhost://800/register' , {userData})

          let response = {data : {success : true , message : 'Registration done'}}

          if(response.data.success){
            SetuserData({ name: '', email: ' ', password: '', confirmPassword: '' })
            alert(response.data.message)
            router('/loginForm')
            
          }
        }catch(error){
          alert('Registration failed')
        }

        // alert('Registraton successFull');
        
      }
      else{
        alert('Both Password Did Not Matched')
      }

    }
    else {
      alert('All feilds are required')
    }
  }

  function HandleChange(event) {

    SetuserData({ ...userData, [event.target.name]: event.target.value })
  }
  return (
    <div>
      <h1>RegisterForm</h1>
      <form action="" onSubmit={HandleSubmit}>  {/* In react we dont have to  {HandleSubmit(event)} send event from html code*/}
        <label htmlFor="">Name :</label><br />
        <input type="text" onChange={HandleChange} name='name' value={userData.name} /><br />
        <label htmlFor="">Email :</label><br />
        <input type="email" onChange={HandleChange} name='email' value={userData.email} /><br />
        <label htmlFor="">Password :</label><br />
        <input type="password" onChange={HandleChange} name='password' value={userData.password} /><br /><br />
        <label htmlFor="">Confirm Password :</label><br />
        <input type="password" onChange={HandleChange} name='confirmPassword' value={userData.confirmPassword} /><br /><br />
        <input type="submit" name="" id="" value='Register' />
      </form>
    </div>
  )
}

export default RegisterForm
