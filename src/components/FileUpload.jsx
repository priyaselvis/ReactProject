import { Button, IconButton, Snackbar } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import '../assets/css/file.css'
import { useNavigate } from 'react-router-dom';

const FileUpload = () => {
  const [open, setOpen] = React.useState(false);
  const navigate=useNavigate();
    const handleSubmit = (event) =>{
        event.preventDefault();
        setOpen(true)
        setTimeout(()=>{
          navigate('/Home')
        },2000)
    }  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }

      setOpen(false);
    };
  
    const action = (
      <React.Fragment>
        <Button color="secondary" size="small" onClick={handleClose}>
          UNDO
        </Button>
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </React.Fragment>
    );

  return (
    <div className='maina'>
      <div className='bga'></div>
        <h1 style={{fontFamily:'cursive',textDecoration:'underline'}}>File Upload</h1>
        <form onSubmit={handleSubmit}>
          <h3 className='ppp'>Aadhar card</h3>
            <input type="file" name="file"></input>
            <Button variant="contained" onClick={()=>alert('File Uploaded!')}>Upload</Button>
          <h3 className='ppp'>Driver License/Passport</h3>
            <input type="file" name="file"></input>
            <Button variant="contained" onClick={()=>alert('File Uploaded!')}>Upload</Button>
            <h3 className='ppp'>Medical Records</h3>
            <input type="file" name="file"></input>
            <Button variant="contained" onClick={()=>alert('File Uploaded!')}>Upload</Button>
          <h3 className='ppp'>Income Certificate</h3>
              <input type="file" name="file"></input>
              <Button variant="contained" onClick={()=>alert('File Uploaded!')}>Upload</Button>
          <h3 className='ppp'>Current Health Status(Medical Certificate)</h3>
            <input type="file" name="file"></input>
            <Button variant="contained" onClick={()=>alert('File Uploaded!')}>Upload</Button><br></br><br></br>
            <Button variant="outlined" style={{backgroundColor:'plum',color:'black',fontSize:'20px',cursor:'pointer',border:'3px solid black',borderRadius:'10px'}} type='submit'>Submit</Button>
            <Snackbar
                open={open}
                autoHideDuration={4000}
                onClose={handleClose}
                message="Your datas have been submitted successfully.You will receive a mail for further updates"
                action={action}
            />
        </form>
    </div>
  )
}

export default FileUpload