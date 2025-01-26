import React from 'react'
import './Ourproducts.css'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
const Ourproducts = () => {
  return (
    <>
   <div className='md:flex' style={{marginTop:{lg:"100px",md:"70px"}}}>
    <Typography sx={{marginTop:{md:"110px",lg:"110px",sm:"100px",xs:"90px"},marginLeft:{lg:"120px",md:"15px",sm:"15px",xs:"15px"},width:{md:"auto"}}}  >
    <Typography variant='h4' sx={{fontWeight:{md:"bold",lg:"bold",sm:"bold",xs:"bold"},fontSize:{lg:"68px",md:"68px",sm:"53px"},color:"black"}} className='font-mono  '>Our Products</Typography>
    <p style={{marginTop:"20px",fontSize:"18px",opacity:"0.7"}}>We develop all our EnactOn products completely in-house. Our approach is to build products with global impact by leveraging the best of technologies.</p>
    </Typography>
    <Box component='img' src='https://www.enacton.com/wp-content/uploads/2022/02/enacton-technologies-products.png' sx={{width:{md:"590px",lg:"650px",sm:"550px"},marginLeft:{xs:"40px",lg:"190px"},marginRight:{lg:"130px",md:"10px",sm:"-90px"},marginTop:{md:"10px",lg:"0px",xs:"20px",sm:"20px"}}}/>
    </div> 
    <div className='md:flex' style={{marginTop:{lg:"100px",md:"90px"}}}>
    <Typography sx={{marginTop:{md:"110px",lg:"110px",sm:"100px",xs:"90px"},marginLeft:{lg:"120px",md:"15px",sm:"15px",xs:"15px"},width:{md:"auto"}}}  >
    <Typography variant='h4' sx={{fontWeight:{md:"bold",lg:"bold",sm:"bold",xs:"bold"},fontSize:{lg:"68px",md:"68px",sm:"53px"},color:"black"}} className='font-mono  '>EnactSoft</Typography>
    <p style={{color:"#00CED1",fontWeight:"900",fontSize:"18px"}}>Affiliate business software solutions</p>
    <p style={{marginTop:"20px",fontSize:"17px",opacity:"0.7"}}>Based on the extensive market research, we develop the best <a href='#' style={{color:"blue"}}>affiliate business software,</a> including the website, app & browser extension for coupon, cashback, in-store cashback, crypto cashback, and discovery shopping.</p>
       <Button
     sx={{fontSize:{lg:"18px"},marginLeft:{xs:"10px"},color:"white",borderRadius:"14px",width:"200px",height:{sm:"48px",xs:"48px",md:"48px",lg:"55px"},marginRight:{md:"-50px"},marginTop:"30px"}} 
    className='bg-gradient-to-r from-emerald-500 to-orange-500  '>Visit EnactSoft</Button>
    </Typography>
    <Box component='img' src='https://www.enacton.com/wp-content/uploads/2022/02/enacsoft-service.png' sx={{width:{md:"590px",lg:"650px",sm:"550px"},marginLeft:{xs:"40px",lg:"190px"},marginRight:{lg:"130px",md:"10px",sm:"-90px"},marginTop:{md:"100px",lg:"0px",xs:"20px",sm:"20px"}}}/>
    </div>
    <div className='md:flex' style={{marginTop:{lg:"100px",md:"90px"}}}>
    <Typography sx={{marginTop:{md:"110px",lg:"110px",sm:"100px",xs:"90px"},marginLeft:{lg:"620px",md:"515px",sm:"15px",xs:"15px"},width:{md:"auto"},float:{lg:"right"}}}  >
    <Typography variant='h4' sx={{fontWeight:{md:"bold",lg:"bold",sm:"bold",xs:"bold"},fontSize:{lg:"68px",md:"68px",sm:"53px"},color:"black"}} className='font-mono  '>ExtraDonation</Typography>
    <p style={{color:"#00CED1",fontWeight:"900",fontSize:"18px"}}>Free fundraising platform for non-profits</p>
    <p style={{marginTop:"20px",fontSize:"17px",opacity:"0.7"}}>Non-profit organizations can raise more funds by using this simple and innovative method. Place our widget on your website to boost fundraising. It takes 2 minutes to get started and is completely free.</p>
       <Button
     sx={{fontSize:{lg:"18px"},marginLeft:{xs:"10px"},color:"white",borderRadius:"14px",width:"250px",height:{sm:"48px",xs:"48px",md:"48px",lg:"55px"},marginRight:{md:"-50px"},marginTop:"30px"}} 
    className='bg-gradient-to-r from-emerald-500 to-orange-500  '>Visit ExtraDonation</Button>
    </Typography>
    <Box component='img' src='https://www.enacton.com/wp-content/uploads/2022/02/extradonation-service.png' sx={{width:{md:"590px",lg:"650px",sm:"550px"},float:{lg:"left"},marginLeft:{xs:"40px",lg:"-110px"},marginRight:{lg:"30px",md:"-670px",sm:"-90px"},marginTop:{md:"100px",lg:"0px",xs:"20px",sm:"20px"}}}/>
    </div>
    <div className='md:flex' style={{marginTop:{lg:"100px",md:"90px"}}}>
    <Typography sx={{marginTop:{md:"110px",lg:"110px",sm:"100px",xs:"90px"},marginLeft:{lg:"120px",md:"15px",sm:"15px",xs:"15px"},width:{md:"auto"}}}  >
    <Typography variant='h4' sx={{fontWeight:{md:"bold",lg:"bold",sm:"bold",xs:"bold"},fontSize:{lg:"68px",md:"68px",sm:"53px"},color:"black"}} className='font-mono  '>Coupomated</Typography>
    <p style={{color:"#00CED1",fontWeight:"900",fontSize:"18px"}}>SaaS platform to auto-pilot affiliate business operations</p>
    <p style={{marginTop:"20px",fontSize:"17px",opacity:"0.7"}}>An automated coupon content distribution platform, providing a robust coupon API and discount data feed to all leading news media, coupon websites, industry-leading blogs, cashback websites, shopping comparison websites, and apps at highly affordable monthly subscription costs. The Coupomated caters to the Indian affiliate industries. <a href='#' style={{color:"blue"}}>affiliate business software,</a> including the website, app & browser extension for coupon, cashback, in-store cashback, crypto cashback, and discovery shopping.</p>
       <Button
     sx={{fontSize:{lg:"18px"},marginLeft:{xs:"10px"},color:"white",borderRadius:"14px",width:"250px",height:{sm:"48px",xs:"48px",md:"48px",lg:"55px"},marginRight:{md:"-50px"},marginTop:"30px"}} 
    className='bg-gradient-to-r from-emerald-500 to-orange-500  '>Visit Coupomated</Button>
    </Typography>
    <Box component='img' src='https://www.enacton.com/wp-content/uploads/2022/02/coupomated-service.png' sx={{width:{md:"590px",lg:"650px",sm:"550px"},marginLeft:{xs:"40px",lg:"190px"},marginRight:{lg:"130px",md:"10px",sm:"-90px"},marginTop:{md:"100px",lg:"0px",xs:"20px",sm:"20px"}}}/>
    </div>
    </>
  )
}

export default Ourproducts