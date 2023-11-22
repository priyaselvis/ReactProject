import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from '../components/Signup.jsx'
import LoginForm from '../components/LoginForm.jsx'
import HomePage from '../components/HomePage.jsx'
import RegForm from '../components/RegForm.jsx'
import FileUpload from '../components/FileUpload.jsx'
const Routing = () => {
  return (
      <Routes>
        <Route exact path='/' element={<Signup/>}/>
        <Route path='/Login' element={<LoginForm/>}/>
        <Route path='/Home' element={<HomePage/>}/>
        <Route path='/Form' element={<RegForm/>}/>
        <Route path='/FileUp' element={<FileUpload/>}/>
      </Routes>
  )
}

export default Routing