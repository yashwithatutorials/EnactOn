import React from 'react'
import './Business.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
//import CardActions from '@mui/material/CardActions';
// import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEye';
const Business = () => {
  return (
    <>
    <div className='text-center our'>
        <h1 className='frst'>Our</h1>
        <h2 className='buss'>Business Philosophy</h2>
        </div>
        <div className="business-philosophy">
           
            <div className="cards-container">
                <div className="card">
                    <img src="../../src/assets/mission.png" alt="Mission Icon" className='icon' />
                    <h3>Mission</h3>
                    <p>
                        To provide the most innovative, efficient, and value-driven business software 
                        solutions that are automated yet affordable.
                    </p>
                </div>
                <div className="card">
                    <img src="../../src/assets/vision.png" alt="Vision Icon" className='icon' />
                    <h3>Vision</h3>
                    <p>
                        We intend to use an array of cutting-edge technologies and business 
                        opportunities to strengthen the value we provide.
                    </p>
                </div>

                {/* Values Card */}
                <div className="card">
                    <img src="/../../src/assets/values.png" alt="Values Icon" className='icon'/>
                    <h3>Values</h3>
                    <p>
                        We value smart, passionate & creative people who are empowered to make 
                        a difference. Our culture, flat organization, and environment allow everyone to do 
                        the best work.
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Business