import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from '../components/Signup.jsx'
import LoginForm from '../components/LoginForm.jsx'
import HomePage from '../components/HomePage.jsx'
import RegForm from '../components/RegForm.jsx'
import FileUpload from '../components/FileUpload.jsx'
import { AuthContext } from "../context/useContext.jsx";


const Routing = () => {
  const { auth } = useContext(AuthContext);
  return (
      <Routes>
        <Route exact path='/' element={<Signup/>}/>
        <Route path='/Login' element={<LoginForm/>}/>
        {(auth.user)&&(
          <>
          <Route path='/Home' element={<HomePage/>}/>
          <Route path='/Form' element={<RegForm/>}/>
          <Route path='/FileUp' element={<FileUpload/>}/>
        </>
        )}
        <Route path='*' element={<LoginForm/>}/>
      </Routes>
  )
}

export default Routing