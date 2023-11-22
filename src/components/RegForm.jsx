import React from 'react'
import '../assets/css/From11.css'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
const RegForm = () => {
    const vvv=useNavigate();
    const handleFileUpload = () =>{
        vvv('/FileUp')
    }
  return (
    <>
        <div className='af'>
            <div className='bgaa'></div>
            <form onSubmit={handleFileUpload}>
            <h1 className='y' style={{fontFamily:'cursive',textDecoration:'underLine',color:'purple'}}>Let's move ahead with your Personal details</h1>
            <div className='input5'>
                <label htmlFor="a" className='x'>1) FirstName:</label>&emsp;
                <input type ="text" name="username" id="username" placeholder="Enter your firstname"required minLength={4} maxLength={14} ></input>
            </div><br></br>
            <div className='abc'>
                <label htmlFor="username" className='x'>2) LastName:</label>&emsp;
                <input type ="text" name="username" id="username" placeholder='Enter your lastname'required minLength={4} maxLength={14} ></input>
            </div><br></br>
            <div className='abcd'>
            <label htmlFor="birthday" className='x'>3) Date of Birth:</label>&emsp;
            <input type="date" id="birthday" name="birthday" placeholder="Enter your DOB" required></input>
            </div><br></br>
            <label htmlFor="Gender" className='x'>4) Gender:</label><br></br>
            <input type="radio" id="Male" name="Gender" value="Male" />Male<br></br>
            <input type="radio" id="Female" name="Gender" value="Female"/>Female<br></br>
            <input type="radio" id="Others" name="Gender" value="Others"/>Others
            <div className='input_field'>
                <label htmlFor="occupation" className='x'>5) Occupation:</label>&emsp;
                <input type ="text" name="occupation" id="occupation" placeholder='Enter your Occupation'required></input>
            </div><br></br>
            <div className='input_field'>
                <label htmlFor="email" className='x'>6) Email:</label>&emsp;
                <input type ="email" name="email" id="email" placeholder='Enter your email'required></input>
            </div><br></br>
            <div className='input_field'>
                <label htmlFor="number" className='x'>7) Phone Number:</label>&emsp;
                <input type ="text" name="number" id="number" placeholder='Enter your phone number'required pattern="[1-9]{1}[0-9]{9}"></input>
            </div><br></br>
            <div className='input_field'>
                <label htmlFor="address" className='x'>7) Address:</label><br></br>
                <textarea rows={10} cols={40}></textarea>
            </div>
            <br></br>
            <div>
                <label htmlFor="button" className='x'>9) Do You Smoke?</label><br></br>
                <input type="radio" id="yes" name="button" value="yes"></input>&emsp;
                <label htmlFor="yes">Yes</label><br></br>
                <input type="radio" id="no" name="button" value="no"></input>&emsp;
                <label htmlFor="no">No</label><br></br><br></br>
            </div>
            <div>
                <label htmlFor="button1" className='x'>10) Marital Status:</label><br></br>
                <input type="radio" id="yes" name="button1" value="yes"></input>&emsp;
                <label htmlFor="yes">Married</label><br></br>
                <input type="radio" id="no" name="button1" value="no"></input>&emsp;
                <label htmlFor="no">Not Married</label><br></br><br></br>
             
            </div>
            
            <p><b>11)</b> 
            <select>
                <option>State</option>
                <option>TamilNadu</option>
                <option>Kerala</option>
                <option>Andhra Pradesh</option>
                <option>Karnataka</option>
                <option>Telangana</option>
                <option>Goa</option>
            </select><br></br><br></br>
            </p>
           
                <input type="checkbox" id="no" name="button" value="no" required></input>&emsp;
                <label htmlFor="yes" style={{fontFamily:'serif'}}>I hereby accept all terms and conditions</label><br></br>
           <br></br>
           <Button variant='contained' style={{background:'purple'}} type="submit">Continue</Button>
            </form>
        </div>
    </>
  )
}

export default RegForm