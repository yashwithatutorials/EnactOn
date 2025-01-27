import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
const ExtraDonation = () => {
  return (
    <>
   <div className='md:flex' style={{marginTop:{lg:"100px",md:"90px"}}}>
    <Typography sx={{marginTop:{md:"110px",lg:"110px",sm:"100px",xs:"90px"},marginLeft:{lg:"120px",md:"15px",sm:"15px",xs:"15px"},width:{md:"auto"}}} className='md:text-left md:w-1/2' >
    <Typography variant='h4' sx={{fontWeight:"bold",fontSize:{lg:"68px",md:"68px",sm:"53px"},color:"black"}} className='font-mono  '>ExtraDonation</Typography>
    <p style={{color:"#00CED1",fontWeight:"900",fontSize:"18px"}}>Free fundraising platform for non-profits</p>
    <p style={{marginTop:"20px",fontSize:"17px",opacity:"0.7"}}>Non-profit organizations can raise more funds by using this simple and innovative method. Place our widget on your website to boost fundraising. It takes 2 minutes to get started and is completely free.</p>
       <Button
     sx={{fontSize:{lg:"18px"},marginLeft:{xs:"10px"},color:"white",borderRadius:"14px",width:"250px",height:{sm:"48px",xs:"48px",md:"48px",lg:"55px"},marginRight:{md:"-50px"},marginTop:"30px"}} 
    className='btn  '>Visit ExtraDonation</Button>
    </Typography>
    <Box  component='img' src='https://www.enacton.com/wp-content/uploads/2022/02/extradonation-service.png' sx={{width:{md:"480px",lg:"500px",sm:"480px"},height:{lg:"400px"},marginLeft:{xs:"40px",lg:"100px"},marginRight:{lg:"200px",md:"50px",sm:"-10px"},marginTop:{md:"100px",lg:"0px",xs:"20px",sm:"20px"}}}/>
    </div>
    </>
  );
};

export default ExtraDonation;
