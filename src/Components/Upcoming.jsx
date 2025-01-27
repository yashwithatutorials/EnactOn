import React from 'react'
import './Upcoming.css'
const proData=[
    {
        ti:"EnactFeed",
        title:"Affiliate automation software for global customers",
        concept:"Robust affiliate coupon data feed for the global customers to autopilot their affiliate business. Now fly high with our proprietor tools and eliminate all leakages and inefficiencies from your business operations.",
        soon:"Coming Soon"
    },
    {
        ti:"AidBux",
        title:"Free fundraising platform for Creators & Influencers",
        concept:"Many people are selflessly contributing to improve & influence the lives of millions of people. With AidBux, people can fund the selfless creators by donating without actually paying for it.",
        soon:"Coming Soon"
    },
    {
        ti:"Shopping Haat",
        title:"A platform for small-town stores for online services",
        concept:"One-stop-shop in tier 3 & tier 5 regions to sell products/services available online. Offer the best price to customers using discount codes. Get all the help on establishing franchisee to everyday online shopping.",
        soon:"Coming Soon"
    }
];

const Upcoming = () => {
  return (
    <>
        <div style={{textAlign:"center",marginTop:"90px"}}>
            <h1 style={{fontSize:"32px",fontWeight:"bold"}}>Our Upcoming Products</h1>
            <div className='card-containers' >
                {proData.map((pro,index)=>(
                    <div key={index} className='card' >
                        <h1>{pro.ti}</h1>
                        <h5>{pro.title}</h5>
                        <p>{pro.concept}</p>
                        <p>{pro.soon}</p>
                    </div>
                ))
                }
            </div>
            
        </div>
    </>
  )
}

export default Upcoming