// import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Aboutus from './Aboutus';
import Expertise from './Expertise'
import Business from './Business'
import Talk from './Talk'
import Culture from './Culture'
import Customer from './Customer'
import StatsCard from './StatsCard'
import Solution from './Solution'
import Review from './Review'
const Main = () => {
  return (
    <>
    <div className='md:flex'>
    <Typography sx={{marginTop:{md:"155px",lg:"120px",sm:"12s0px",xs:"90px"},marginLeft:{lg:"130px",md:"15px",sm:"15px",xs:"15px"}}}  >
    <Typography variant='h4' sx={{fontWeight:{md:"500",lg:"500",sm:"600",xs:"550"},fontSize:{lg:"68px",md:"68px",sm:"53px"},color:"black"}} className='font-mono  '>Best Software Development Company</Typography>
    <p style={{marginTop:"20px",fontSize:"18px",opacity:"0.7"}}>A passionate team developing the best-in-class B2B and SaaS products using cutting-edge Web 2.0 and Web 3.0 technologies for global customers</p>
<a href='/Letstalk'>    <Button
     sx={{fontSize:{lg:"21px"},marginLeft:{xs:"10px"},color:"white",borderRadius:"14px",width:{xs:"130px",sm:"130px",md:"130px",lg:"180px"},height:{sm:"48px",xs:"48px",md:"48px",lg:"55px"},marginRight:{md:"-50px"},marginTop:"30px"}} 
    className='bg-gradient-to-r from-emerald-500 to-orange-500  '>Enquire Now</Button></a>
    </Typography>
    {/* <Box component="image" src="../../src/assets/enact.png"/> */}
    <Box component='img' src='../../src/assets/EnactOnpic.png' sx={{width:{md:"400px",lg:"600px",sm:"550px"},marginLeft:{xs:"40px"},marginRight:{lg:"130px",md:"10px",sm:"-90px"},marginTop:{md:"100px",lg:"0px",xs:"20px",sm:"90px"}}}/>
    </div> 
    <Aboutus/>
    <Expertise/>
       <Business/>
      <StatsCard/> 
      <Solution/>
      <Review/>
      <Customer/>
      <Culture/>
      <Talk/>
    </>

  )
}

export default Main