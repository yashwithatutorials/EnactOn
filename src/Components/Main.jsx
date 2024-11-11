import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
const Main = () => {
  return (
    <>
    <div className='md:flex'>
    <Typography sx={{marginTop:{md:"165px",lg:"190px",sm:"60px"},marginLeft:{lg:"130px",md:"10px",sm:"10px"}}}  >
    <Typography variant='h4' sx={{fontWeight:{md:"500",lg:"600",sm:"550"},fontSize:{lg:"62px",md:"55px",sm:"32px"}}} className='font-mono '>Best Software Development Company</Typography>
    <p style={{marginTop:"20px",fontSize:"18px"}}>A passionate team developing the best-in-class B2B and SaaS products using cutting-edge Web 2.0 and Web 3.0 technologies for global customers</p>
    <Button sx={{marginLeft:{xs:"10px"},color:"white",borderRadius:"14px",width:"130px",height:"48px",marginRight:{md:"-50px"},marginTop:"30px"}} className='bg-gradient-to-r from-emerald-500 to-orange-500  '>Enquire Now</Button>
    </Typography>
    {/* <Box component="image" src="../../src/assets/enact.png"/> */}
    <Box component='img' src='../../src/assets/hero-home-image-1.png' sx={{width:{md:"500px",lg:"700px"},marginRight:{lg:"70px",md:"20px"},marginTop:{md:"90px",lg:"100px"}}}/>
    </div>    
    </>

  )
}

export default Main