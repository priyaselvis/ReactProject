import React, { useContext, useEffect, useRef, useState } from 'react'
import '../assets/css/LoginForm.css';
import { Button, Link} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo1 from '../images/Free_Sample_By_Wix.jpg';
import { getUserData } from '../Service/UserApi';
import { AuthContext } from "../context/useContext";

const LoginForm = () => {
  const { setAuth } = useContext(AuthContext);
    const [data,setdata]=useState([]);

  useEffect(()=>
  {
    const fetchData =async()=>
    {
       await getUserData ()
       .then((res)=>setdata(res.data))
       .catch((e)=>console.error(e));
    }
    fetchData();
  },[]);

    const emailRef=useRef();
  const passwordRef=useRef();

    const navigate=useNavigate();
    const handleSubmit=(event)=>{
        event.preventDefault();
        const email =emailRef.current.value;
        const password =passwordRef.current.value;
      const somedata=data.findIndex((props)=>props.email===email);
      console.log(somedata)
      if( somedata!==-1&& data[somedata].password===password) 
      {
        setAuth({user:true})
          navigate('/Home');        
      }
 
      else
      {
        alert("invalid password/emailid");
        navigate('/Login');
      }
    
    }
  return (
        <div className="m">
            <div className='bag'></div>
            <div className="aaa">
                 <h2 style={{fontFamily:'cursive',display:'flex',paddingLeft:'55px',fontSize:'30px'}}>
                <img src={logo1} alt="none" style={{width:'80px',height:'80px'}}></img>&emsp;
                    Log In</h2>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className='ccc'>
                        <label htmlFor='email' style={{paddingRight:'155px'}}><b>Email:</b></label>
                        <br></br>
                        <input style={{width:'250px',height:'50px'}}className='email' type="email" name="email" id="email" placeholder="Enter your email" required ref={emailRef}/>
                    </div>
                    <br></br>
                    <div className='ddd'>
                        <label htmlFor='password' style={{paddingRight:'120px'}}><b>Password:</b></label>
                        <br></br>
                        <input style={{width:'250px',height:'50px'}}className="password" type="password" name="password" id="password" placeholder="Enter your password" required minLength={8} maxLength={16} ref={passwordRef}/>
                    </div>
                    <br></br>
                    <div className='bbb'>
                        <p style={{fontFamily:'cursive'}}>Forgot Password?<Link style={{color:'palevioletred',cursor:'pointer'}}><b>Click here</b></Link></p>
                    <Button variant="contained" type='submit' style={{background:'darkviolet'}}>LogIn</Button>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default LoginForm