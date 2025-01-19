import React from 'react'
import './Culture.css'
import Button from '@mui/material/Button';
const Culture = () => {
  return (
    <>
        <div className='text-center'>
            <h1 style={{color:'orange'}} className='text-2xl'>Our Culture</h1>
            <h3 className='text-xl'>Work is NO different from Life!</h3>
        </div>
        <div className='pic'>
        <div  className='img1'>
            <img src='/../../src/assets/discussion.png' className='imag' alt='creating a helping-hands mindset' ></img>
            <h4>creating helping-hands mindset</h4>
            </div>
            <div className='img1'>
            <img src='/../../src/assets/teamdinner.png' className='imag'></img>
            <h4>Team dinner</h4>
            </div>
            <div className='img1'>
            <img src='/../../src/assets/event.png' className='imag'></img>
            <h4>Festival celebration</h4>
            </div>
        </div>
        <div className='btns'>
        <button className='btn'>Life at EnactOn</button>
        <button className='work'>Work With Us</button>
        </div>
    </>
  )
}

export default Culture