import React, { useState } from 'react'
import '../assets/css/signup.css'
import usericon from '../images/icons8-user-32.png'
import pass from '../images/icons8-password-50.png'
import mail from '../images/icons8-mail-50.png'
import logo1 from '../images/Free_Sample_By_Wix.jpg'
import { Button, Link } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { UserData } from '../Service/UserApi'

const Signup = () => {
    const zz=useNavigate();
    const handleLogin = () =>{
        zz('/Login')
    }

    const [data,setdata]=useState(
        {
        name:"",
        email:"",
        password:""
        }
       )
       const navigate=useNavigate();
    
        const handleSubmit=(event)=>{
            event.preventDefault(); 
            UserData(data);   
            navigate('/Home')
           }
  return (
        <div className='bg'>
     <form method='post' onSubmit={handleSubmit}>
        <div className='hello'>

            <div className='text'>
                <h2 style={{fontFamily:'cursive',display:'flex',paddingLeft:'55px',fontSize:'30px'}}>
                <img src={logo1} alt="none" style={{width:'80px',height:'80px'}}></img>&emsp;
                    SIGN UP</h2>
            </div>
            <div className='inputs'>
                <div className='input'>
                <div className='name'>
                    <img src={usericon} alt="none" width='25px' style={{paddingRight:'10px'}}></img>
                    <input type='text' name='name' id='name' placeholder='Username' minLength={5} maxLength={15} required onChange={(e)=> setdata({...data,name:e.target.value})}/>
                </div>
                </div>
                <div className='input'>
                <div className='mail' style={{lineHeight:'60px'}}>
                    <img src={mail} alt="none" width='25px' style={{paddingRight:'10px'}}></img>
                    <input type='email' name='mail' id='mail' placeholder='Mail' style={{lineHeight:'10px'}} required onChange={(e)=> setdata({...data,email:e.target.value})}/>
                </div>
                </div>      
                <div className='input'>
                <div className='pass' style={{marginTop:'2px'}}>
                    <img src={pass} alt="none" width='25px' style={{paddingRight:'10px'}}></img>
                    <input type='password' name='current-password' id='current-password' placeholder='Password' required minLength={8} maxLength={16} onChange={(e)=> setdata({...data,password:e.target.value})}/>
                </div>
                </div>
                
            </div>
            <div style={{margin:'20px',fontFamily:'cursive'}}className='for'>Already have an account?<Link textDecoration='none' onClick={handleLogin} style={{cursor:'pointer'}}>Login</Link></div>
            
            <div className='signin'>
                    <Button variant='contained' type='submit'>Sign Up</Button>
            </div>              
        </div>
        </form>
        </div>
  )
}

export default Signup