import React, { useState } from 'react'
import '../assets/css/Home.css'
import logo from '../images/Free_Sample_By_Wix.jpg'
import { AppBar, Button, Container, Dialog, DialogContent, DialogTitle, Link, Toolbar} from '@mui/material';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import Marquee from 'react-fast-marquee';
//import Cancercover from '../pdf/Cancer cover.pdf'
import { useNavigate } from 'react-router-dom';
import ArogyaRakshak from '../pdf/Arogya Rakshak.pdf'
const HomePage = () => {
    const[data1,setData1]=useState(false)
    const[data2,setData2]=useState(false)
    const[data3,setData3]=useState(false)
    const[data4,setData4]=useState(false)
    const[data5,setData5]=useState(false)
    const[open1,setOpen1]=useState(false)
    const[open2,setOpen2]=useState(false)
    const[open3,setOpen3]=useState(false)
    const[open4,setOpen4]=useState(false)
    const[open11,setOpen11]=useState(false)
    const[open22,setOpen22]=useState(false)
    const[open33,setOpen33]=useState(false)
    const[open44,setOpen44]=useState(false)
    const navi=useNavigate()
    const handleForm = () =>{
      navi('/Form')
    }
    const handle=()=>{
        window.open('https://licindia.in/documents/20121/120067/CIS_LIC%27s+Cancer+Cover_512N314V03.pdf/46d9d5f0-866e-070f-2c41-f79cbc708a1a?t=1694685428264',"_blank");
    }
    const handleClick = () =>{
      navi('/Login')
    }
  return (
    <div className="main">
        <div className='logo'>
            <img className='img' src={logo} alt='' style={{width:'80px',height:'80px'}}></img>
            <h3 className='slogan'>Guarding Your Future, Securing Your Present!</h3>
            <div style={{paddingLeft:'180px',paddingTop:'30px'}}>
            <Button variant="contained" onClick={handleClick}>LOGOUT</Button>
            </div>
        </div>
        <div>
    <Marquee className='marquee' style={{fontFamily:'unset',fontSize:'20px',color:'red',cursor:'pointer',paddingTop:'15px'}} pauseOnHover={true} speed={100}>
        WELCOME TO SYS INSURANCE PORTAL!  HAVE A NICE DAY!!
                </Marquee>
                </div>
        <AppBar position="static" style={{backgroundColor: 'mistyrose'}}>
        <Container>
        <Toolbar>
            <div className='dropdown1'>
                <div className='a1' onClick={(e)=>setData1(!data1)}>
                    About Us
                    <span className='b1'></span>
                </div>
                {data1 && (
                    <div className='c1'>
                        <div className='item1'>
                            <Link href="#" style={{textDecoration:'none',color:'black'}}>History</Link>
                        </div>
                        <div className='item1'>
                            <Link href="#" style={{textDecoration:'none',color:'black'}}>Mission/Vision</Link>
                        </div>
                    </div>
                    
                    )}
            </div>
            <div className='dropdown2'>
                <div className='a2' onClick={(e)=>setData2(!data2)}>
                    Individual Plans
                    <span className='b2'></span>
                </div>
                {data2 && (
                    <div className='c2'>
                        <div className='item2'>
                            <Link href="#" style={{textDecoration:'none',color:'black'}} onClick={()=>setOpen1(true)}>Health Plans</Link>
                            <Dialog open={open1} onClose={()=>setOpen1(false)}>
                            <DialogTitle>Health Plans</DialogTitle>
                            <DialogContent>
                              <Link onClick={()=>setOpen11(true)}>Cancer Cover</Link><br></br><br></br>
                              <Dialog open={open11} onClose={()=>setOpen11(false)}>
                                <DialogContent>
                                  <Link onClick={handle}>Customer Information Sheet</Link>
                                    </DialogContent>
                                <DialogContent>
                                       <Link onClick={handleForm}>Registration Form</Link>
                                </DialogContent>
                              </Dialog>

                              <Link onClick={()=>setOpen22(true)}>Arogya Rakshak</Link><br></br><br></br>
                              <Dialog open={open22} onClose={()=>setOpen22(false)}>
                                <DialogTitle>Arogya Rakshak</DialogTitle>
                                <DialogContent>
                                  <iframe title='hello2'src={ArogyaRakshak} width="100%" height="500px"/> 
                                  <Link onClick={handleForm}>Registration Form</Link>
                                </DialogContent>
                              </Dialog>

                            </DialogContent>
                          </Dialog>
                        </div>
                        <div className='item2'>
                            <Link href="#" style={{textDecoration:'none',color:'black'}} onClick={()=>setOpen2(true)}>Pension Plans</Link>
                            <Dialog open={open2} onClose={()=>setOpen2(false)}>
                            <DialogTitle>Pension Plans</DialogTitle>
                            <DialogContent>
                              <Link onClick={()=>setOpen33(true)}>Jeevan Akshay</Link><br></br><br></br>
                              <Dialog open={open33} onClose={()=>setOpen33(false)}>
                                <DialogTitle><b>Jeevan Akshay</b></DialogTitle>
                                <p style={{marginLeft:'20px'}}>A pension plan is a type of investment plan that helps individuals invest for their future retirement needs.
                                   It allows you to accumulate a pool of funds by making either a lump sum investment or regular premium payments over a period of time. 
                                   These plans ensure that you have a secure future by providing you with a guaranteed steady income stream during your retirement years.
                                   By contributing to a pension plan throughout your working years, you can build a substantial corpus that will support your financial needs when you are no longer actively employed.</p>
                                <DialogContent>
                                  <Link onClick={handleForm}>Registration Form</Link>
                                </DialogContent>
                              </Dialog>

                              <Link onClick={()=>setOpen44(true)}>New Jeevan Shanthi</Link><br></br><br></br>
                              <Dialog open={open44} onClose={()=>setOpen44(false)}>
                                <DialogTitle><b>Jeevan Shanthi</b></DialogTitle>
                                <p style={{marginLeft:'20px'}}>A pension plan is a type of investment plan that helps individuals invest for their future retirement needs.
                                   It allows you to accumulate a pool of funds by making either a lump sum investment or regular premium payments over a period of time. 
                                   These plans ensure that you have a secure future by providing you with a guaranteed steady income stream during your retirement years.
                                   By contributing to a pension plan throughout your working years, you can build a substantial corpus that will support your financial needs when you are no longer actively employed.</p>
                                <DialogContent>
                                  <Link onClick={handleForm}>Registration Form</Link>
                                </DialogContent>
                              </Dialog>
                              <Link>Saral Pension</Link>
                            </DialogContent>
                          </Dialog>
                        </div>
                        <div className='item2'>
                            <Link href="#" style={{textDecoration:'none',color:'black'}} onClick={()=>setOpen3(true)}>Whole Life Plans</Link>
                            <Dialog open={open3} onClose={()=>setOpen3(false)}>
                            <DialogTitle>Whole Life Plans</DialogTitle>
                            <DialogContent>
                              <Link>Jeevan Umang</Link><br></br><br></br>
                              <Link>Jeevan Shaam</Link>
                            </DialogContent>
                          </Dialog>
                        </div>
                        <div className='item2'>
                            <Link href="#" style={{textDecoration:'none',color:'black'}} onClick={()=>setOpen4(true)}>Money Back Plans</Link>
                            <Dialog open={open4} onClose={()=>setOpen4(false)}>
                            <DialogTitle>Money Back Plans</DialogTitle>
                            <DialogContent>
                              <Link>Dhan Rekha</Link><br></br><br></br>
                              <Link>New Money Back Plan - 20 years</Link><br></br><br></br>
                              <Link>New Money Back Plan - 25 years</Link><br></br><br></br>
                              <Link>New Children's Money Back plan</Link>
                            </DialogContent>
                          </Dialog>
                        </div>
                    </div>
                    
                    )}
            </div>
            <div className='dropdown3'>
                <div className='a3' onClick={(e)=>setData3(!data3)}>
                    Group Schemes
                    <span className='b3'></span>
                </div>
                {data3 && (
                    <div className='c3'>
                        <div className='item3'>
                            <Link href="#" style={{textDecoration:'none',color:'black'}}>Contact for Group Insurance Scheme</Link>
                        </div>
                        <div className='item3'>
                            <Link href="#" style={{textDecoration:'none',color:'black'}}>Group Customer/Annutant Login</Link>
                        </div>
                        <div className='item3'>
                            <Link href="#" style={{textDecoration:'none',color:'black'}}>Pension & Group Schemes</Link>
                        </div>
                    </div>
                    
                    )}
            </div>
            <div className='dropdown4'>
                <div className='a4' onClick={(e)=>setData4(!data4)}>
                    NRI
                    <span className='b4'></span>
                </div>
                {data4 && (
                    <div className='c4'>
                        <div className='item4'>
                            <Link href="#" style={{textDecoration:'none',color:'black'}}>NRI Centres</Link>
                        </div>
                        <div className='item4'>
                            <Link href="#" style={{textDecoration:'none',color:'black'}}>NRI Customers</Link>
                        </div>
                    </div>
                    
                    )}
            </div>
            <div className='dropdown5'>
                <div className='a5' onClick={(e)=>setData5(!data5)}>
                    Customer Services
                    <span className='b5'></span>
                </div>
                {data5 && (
                    <div className='c5'>
                        <div className='item5'>
                            <Link href="#" style={{textDecoration:'none',color:'black'}}>Customer Support</Link>
                        </div>
                        <div className='item5'>
                            <Link href="#" style={{textDecoration:'none',color:'black'}}>FeedBack</Link>
                        </div>
                    </div>
                    
                    )}
            </div>
        </Toolbar>
        </Container>
  </AppBar> 
  <div className='pic'>
       <img src='https://i.pinimg.com/originals/00/fe/36/00fe3638fee044663478554a1e53871d.jpg' style={{paddingTop:'5px'}}alt='none' width='700px'></img>
    </div>
    <div class="row">
  <div class="column">
   
    <h2 style={{fontFamily:'cursive'}}>Step 1</h2>
    <img src="https://www.iciciprulife.com/content/icici-prudential-life-insurance/term-insurance-plans/assets_iPS_new/images/35years_desk.svg" alt="none"></img>
    <p style={{fontFamily:'cursive'}}>35 Years
Anil chooses a
Life Cover
of ₹1 crore for 30 years</p>
  </div>
  <div class="column">
  <h2 style={{fontFamily:'cursive'}}>Step 2</h2>
    <img src="https://www.iciciprulife.com/content/icici-prudential-life-insurance/term-insurance-plans/assets_iPS_new/images/35-65years_desk.svg" alt="none"></img>
   <p style={{fontFamily:'cursive',paddingTop:'20px'}}>
35-65 Years
Anil makes regular
premium payment</p>
  </div>
  <div class="column">
  <h2 style={{fontFamily:'cursive'}}>Step 3</h2>
    <img src="https://www.iciciprulife.com/content/icici-prudential-life-insurance/term-insurance-plans/assets_iPS_new/images/65years_desk.svg" alt="none"></img>
   <p style={{fontFamily:'cursive',paddingTop:'15px'}}>65 Years
After his unfortunate death-
The Life Cover is payable to the nominee</p>
  </div>
  <div class="column">
  <h2 style={{fontFamily:'cursive'}}>Step 4</h2>
    <img src="https://www.iciciprulife.com/content/icici-prudential-life-insurance/term-insurance-plans/assets_iPS_new/images/anils-wife_desk.svg" alt="none"></img>
   <p style={{fontFamily:'cursive',paddingTop:'32px'}}>Anil's Wife
The nominee gets
₹83,333 as
monthly income
for 10 years
</p>
  </div>
  </div>
 
    <div className='footer'>
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We are SYS, dedicated to providing the best service to our
              customers.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
             Coimbatore,TamilNadu,India
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: sys@example.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +91 9873452343
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
           sys.com
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
    </div>
  </div>

    
 
  )
}
export default HomePage;