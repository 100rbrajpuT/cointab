import React from 'react'
import {Routes, Route } from "react-router-dom"
import Home from '../components/Home';
import Login from '../components/Login';
import Signup from '../components/Signup';

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/signup' element={ <Signup/> }  />
        </Routes>
              
    </div>
  )
}

export default MainRoutes
