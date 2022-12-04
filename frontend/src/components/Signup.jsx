import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Signup.css"

const Signup = () => {
    const [name, setName]= useState("")
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")
    const navigate = useNavigate();
      


    const handleSubmit = ()=>{
      
      
      const payload = {
        name,
        email,
        password, 
      }
//https://afternoon-garden-45528.herokuapp.com/user/signup
      fetch("http://localhost:8080/user/signup",{
        method: "POST",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(payload)
      })
      .then((res)=>res.json())  
      .then((res)=>{
          console.log("res",res)
       
          if(res.errors){
            alert("Recheck name, email password once")
            return
          }
          if(res){
            alert("registered")
            navigate("/")
          }
      }
      )
      .catch((err)=> {
        console.log(err)
        if(err){
          alert("enter correct details")
          
        }

      })
      

    }
    
  return (
    <div className='sign'>
        <div className='signin' >
        <h1>Signup</h1>
       <input type="text" placeholder='name, minimun 2 letter' onChange={(e)=>setName(e.target.value)} />
        <br/>
        <input type="email" placeholder='email' onChange={(e)=>setEmail(e.target.value)} />
        <br/>
        <input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)} />
        <br/>
       
        <button onClick={handleSubmit}>Register</button>
        </div>
       
    </div>
  )
}

export default Signup
