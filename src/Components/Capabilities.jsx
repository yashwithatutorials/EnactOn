import { Button } from '@mui/material'
import React from 'react'

const Capabilities = () => {
  return (
    <>
    <div style={{textAlign:"center",marginTop:"60px",marginBottom:"50px"}}>
        <h1 style={{fontSize:"28px",color:"orange"}}>Under one-roof</h1>
        <h2 style={{fontSize:"32px",fontWeight:"bold"}}>Our Capabilities</h2>
        <p style={{marginLeft:{lg:"550px",md:"100px"},marginRight:{lg:"550px",md:"100px"},fontSize:"18px"}}>We provide 360-degree solutions to our customers with all resources in-house for design, development, deployment, security, performance, and much more.</p>
        <Button
        style={{
            padding:"15px",
            backgroundColor:"orange",
            color:"white",
            borderRadius:"15px",
        }}
        className='btn'
        >View Infrastructure</Button>
        </div>
    </>
  )
}

export default Capabilities