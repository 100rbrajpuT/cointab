import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("job_token");
        ////setIsLoggedin(false);
        navigate("/")
       alert("Login again")
      };
  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={logout} >Logout</button>
    </div>
  )
}

export default Home
