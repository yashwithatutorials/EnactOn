import React from 'react'
import './View.css'
import Review from './Review'
import Talk from './Talk'
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
const card=[
  {
    image:"https://www.enacton.com/wp-content/uploads/2023/04/FLOLIO.png",
    name:"FLOLio"
  },
  {
    image:"https://www.enacton.com/wp-content/uploads/2023/04/sparissimoworld.png",
    name:"SparissimoWorld"
  },
  {
    image:"https://www.enacton.com/wp-content/uploads/2023/04/Oodlz.io_.png",
    name:"Oodlz.io"
  },
  {
    image:"https://www.enacton.com/wp-content/uploads/2023/05/GrolliaCoupons.png",
    name:"GrolliaCoupons"
  },
  {
    image:"https://www.enacton.com/wp-content/uploads/2023/04/leafymate.png",
    name:"Leafymate"
  },
  {
    image:"https://www.enacton.com/wp-content/uploads/2023/04/hoshin.app_.png",
    name:"Hoshin.app"
  },
  {
    image:"https://www.enacton.com/wp-content/uploads/2023/04/IndiaFreeStuff-extension.png",
    name:"IndiaFreeStuff Extension"
  },
  {
    image:"https://www.enacton.com/wp-content/uploads/2023/05/realcash.png",
    name:"RealCash"
  },
  {
    image:"https://www.enacton.com/wp-content/uploads/2023/05/preispirat.png",
    name:"Preispirat"
  },
  {
    image:"https://www.enacton.com/wp-content/uploads/2023/04/umex.io_.png",
    name:"Umex.io"
  },
  {
    image:"https://www.enacton.com/wp-content/uploads/2023/05/monerio.png",
    name:"Monerio.ch"
  },
  {
    image:"https://www.enacton.com/wp-content/uploads/2023/05/fairbrowse.png",
    name:"FairBrowsw.nl"
  },
  {
    image:"https://www.enacton.com/wp-content/uploads/2023/05/cashback.me_.png",
    name:"Cashback.me"
  },
  {
    image:"https://www.enacton.com/wp-content/uploads/2023/05/kaero.be_.png",
    name:"Kaero.be"
  },
  {
    image:"https://www.enacton.com/wp-content/uploads/2023/04/weddingrings-direct.png",
    name:"Wedding Ring-Direct"
  },
  {
    image:"https://www.enacton.com/wp-content/uploads/2024/05/esgtech.ai_.png",
    name:"EsgTech.AI"
  },
  {
    image:"https://www.enacton.com/wp-content/uploads/2024/05/keikash.png",
    name:"KeiKas"
  },
  {
    image:"https://www.enacton.com/wp-content/uploads/2024/05/aeropost.png",
    name:"aeropost"
  },
  {
    image:"https://www.enacton.com/wp-content/uploads/2024/05/Santabrowser.png",
    name:"SantaBrowser"
  }
]
const View = () => {
 
  return (
   
    <>
    <div className='text-center'>
        <h1 style={{fontSize:"40px",marginTop:"20px",fontWeight:"bold"}}>Explore Our Customer Success Stories</h1>
        <h4>Check out the journeys and experiences of satisfied clients who have benefited from our </h4>
        <a href='#' style={{textDecoration:"underline",color:"purple"}}>services.</a>
        <img src='./src/assets/explore.png'/>
        <div className='client'>
        <h3 style={{fontSize:"18px",fontWeight:"bold"}}>Clients that have trusted us over the years</h3>
        <div className='clients'>
        <img src='./src/assets/oodlzWebAppLogo-1.png' style={{width:"90px"}}/>
                    <img src='./src/assets/sparissimo.png' style={{width:"120px"}}/>
                    <img src='./src/assets/flolio.png' style={{width:"100px"}}/>
                    <img src='./src/assets/gorilla-coupon-logo.png' style={{width:"110px"}}/>
                    <img src='./src/assets/Monerio-logo-248.webp' style={{width:"100px"}}/>
                    <img src='./src/assets/cashbackdunia-icon1.png' style={{width:"190px"}}/>
        </div>
        </div>
        <h2 style={{fontSize:"30px",fontWeight:"bold"}}>You're in good company</h2>
        <h3 style={{fontSize:"18px"}}>Client reviews about the quality product and support we provided</h3>
        <div className="image-container">
        <img src='./src/assets/review.png'/>
        <div className="play-button ">
        <div className='animate-ping ping'></div>
        <PlayCircleFilledOutlinedIcon className="play-icon" style={{width:"400px",height:"70px"}}/>
      </div>
        </div>
        <h2 style={{fontSize:"30px",fontWeight:"bold"}}>Our protfolio</h2>
        <div className='containers'> 
         {card.map((stat, index) => (
                    <div key={index}  className='cards'>
                        <img src={stat.image} style={{width:"350px"}} className='profile'/>
                        <p style={{fontSize:"19px",fontWeight:"bold"}}>{stat.name}</p>
                    </div>
                ))}

        </div>
        <Review/>
        <div style={{marginTop:"50px"}}>
        <Talk />
        </div>
        </div>
   
   
    </>


  )
}

export default View