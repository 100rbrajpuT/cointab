import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Signup.css"


const Login = () => {
  const [email, setEmail]= useState("")
  const [password, setPassword]= useState("")
  const navigate = useNavigate();
  const [count , setCount] = useState(0)


  const handleSubmit = ()=>{
    const payload = {
      email,
      password, 
      count
     
    }

    //http://localhost:8080/user/login
//https://afternoon-garden-45528.herokuapp.com/notes
    fetch("http://localhost:8080/user/login",{
      method: "POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(payload)
    })
    .then((res)=>res.json())  
    .then((res)=>{
      console.log(res)
      if(res.token){
        localStorage.setItem("job_token",res.token)
        alert("login successful")
        navigate("/home")
        setCount(0)
      }
      else{
        alert("somthing went wrong")
        setCount((prev)=>prev +1)
      }
    })
    .catch((err)=> {
           console.log(err)
           setCount((prev)=>prev +1)
          })
   
  }
  console.log(count)

return (
  <div className='sign'>
    <div className='signin'>
    <h1>Login </h1>
      <input type="email" placeholder='email' onChange={(e)=>setEmail(e.target.value)} />
      <br/>
      <input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)} />
      <br/>
    
      <button onClick={handleSubmit}>Login</button>
      <div style={{color: "black", margin:"20px"}}>
        <p style={{padding:"5px"}}>Not a Member?</p>
        <Link  to="/signup" style={{border:"2px solid black", padding:"5px",color:"black", borderRadius:"10px"}}>Signup</Link>
      </div>
    </div>
  </div>
)
}

export default Login
