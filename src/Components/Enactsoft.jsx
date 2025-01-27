import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
const Enactsoft = () => {
  return (
    <div>
    <div className='md:flex' style={{marginTop:{lg:"100px",md:"90px"}}}>
    <Typography sx={{marginTop:{md:"110px",lg:"110px",sm:"100px",xs:"90px"},marginLeft:{lg:"120px",md:"15px",sm:"15px",xs:"15px"},width:{md:"auto"}}}  >
    <Typography variant='h4' sx={{fontWeight:{md:"bold",lg:"bold",sm:"bold",xs:"bold"},fontSize:{lg:"68px",md:"68px",sm:"53px"},color:"black"}} className='font-mono  '>EnactSoft</Typography>
    <p style={{color:"#00CED1",fontWeight:"900",fontSize:"18px"}}>Affiliate business software solutions</p>
    <p style={{marginTop:"20px",fontSize:"17px",opacity:"0.7"}}>Based on the extensive market research, we develop the best <a href='#' style={{color:"blue"}}>affiliate business software,</a> including the website, app & browser extension for coupon, cashback, in-store cashback, crypto cashback, and discovery shopping.</p>
       <Button
     sx={{fontSize:{lg:"18px"},marginLeft:{xs:"10px"},color:"white",borderRadius:"14px",width:"200px",height:{sm:"48px",xs:"48px",md:"48px",lg:"55px"},marginRight:{md:"-50px"},marginTop:"30px"}} 
    className='btn '>Visit EnactSoft</Button>
    </Typography>
    <Box component='img' src='https://www.enacton.com/wp-content/uploads/2022/02/enacsoft-service.png' sx={{width:{md:"590px",lg:"600px",sm:"480px",xs:"580px"},height:"450px",marginLeft:{xs:"40px",lg:"190px"},marginRight:{lg:"100px",md:"-10px",sm:"-10px"},marginTop:{md:"100px",lg:"0px",xs:"20px",sm:"20px"}}}/>
    </div>
    </div>
  )
}

export default Enactsoft