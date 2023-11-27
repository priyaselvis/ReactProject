import React from 'react'
import '../assets/css/From11.css'
import { Button, FormControlLabel, FormLabel } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
const RegForm = () => {
    const vvv=useNavigate();
    const handleFileUpload = () =>{
        vvv('/FileUp')
    }
    const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
        <div className='af'>
            <div className='bgaa'></div>
            <form onSubmit={handleFileUpload}>
            <h1 className='y' style={{fontFamily:'cursive',textDecoration:'underLine',color:'brown'}}> PERSONAL DETAILS</h1>
            <div className='input5'>
                <label htmlFor="a" className='x'>FirstName:</label>&emsp;
                <input type ="text" name="username" id="username" placeholder="Enter your firstname"required minLength={4} maxLength={14} ></input>
            </div><br></br>
            <div className='abc'>
                <label htmlFor="username" className='x'>LastName:</label>&emsp;
                <input type ="text" name="username" id="username" placeholder='Enter your lastname'required minLength={4} maxLength={14} ></input>
            </div><br></br>
            <div className='abcd'>
            <label htmlFor="birthday" className='x'> Date of Birth:</label>&emsp;
            <input type="date" id="birthday" name="birthday" placeholder="Enter your DOB" required></input>
            </div><br></br>
            <div className='input_field'>
                <label htmlFor="email" className='x'>Email:</label>&emsp;
                <input type ="email" name="email" id="email" placeholder='Enter your email'required></input>
            </div><br></br>
            <FormControl>
      <FormLabel id="demo-radio-buttons-group-label" style={{fontFamily:'cursive',fontSize:'20px',color:'black'}}><b>Gender:</b></FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="1" control={<Radio />} label="Female" />
        <FormControlLabel value="2" control={<Radio />} label="Male" />
        <FormControlLabel value="3" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>

            <div className='input_field'>
                <label htmlFor="occupation" className='x'>Occupation:</label>&emsp;
                <input type ="text" name="occupation" id="occupation" placeholder='Enter your Occupation'required></input>
            </div><br></br>
            <div className='input_field'>
                <label htmlFor="number" className='x'>Phone Number:</label>&emsp;
                <input type ="text" name="number" id="number" placeholder='Enter your phone number'required pattern="[1-9]{1}[0-9]{9}"></input>
            </div><br></br>
            <div className='input_field'>
                <label htmlFor="address" className='x'>Address:</label><br></br>
                <textarea rows={10} cols={40}></textarea>
            </div>
            <br></br>
            <div>
            <FormControl>
      <FormLabel id="demo-radio-buttons-group-label" style={{fontFamily:'cursive',fontSize:'20px',color:'black'}}><b>Marital Status:</b></FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="4" control={<Radio />} label="Not Married" />
        <FormControlLabel value="5" control={<Radio />} label="Married" />
      </RadioGroup>
    </FormControl>
             
            </div>
            <p><b></b> 
            <Box sx={{ minWidth: 120 }}>
      <FormControl style={{width:'200px'}}>
        <InputLabel id="demo-simple-select-label">State</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={30}>Andhra Pradesh</MenuItem>
          <MenuItem value={60}>Karnataka</MenuItem>
          <MenuItem value={20}>Kerala</MenuItem>
          <MenuItem value={10}>TamilNadu</MenuItem>
          <MenuItem value={40}>Telangana</MenuItem>
          <MenuItem value={50}>Others</MenuItem>
        </Select>
      </FormControl>
    </Box>
            </p>
            <div>
            <FormControl>
      <FormLabel id="demo-radio-buttons-group-label" style={{fontFamily:'cursive',fontSize:'20px',color:'black'}}><b>Do you Smoke?</b></FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="6" control={<Radio />} label="No" />
        <FormControlLabel value="7" control={<Radio />} label="Yes" />
      </RadioGroup>
    </FormControl>
            </div>
            
           
                <input type="checkbox" id="no" name="button" value="no" required></input>&emsp;
                <label htmlFor="yes" style={{fontFamily:'serif'}}>I hereby accept all terms and conditions</label><br></br>
           <br></br>
           <Button variant='contained' style={{background:'brown'}} type="submit">Continue</Button>
            </form>
        </div>
    </>
  )
}

export default RegForm