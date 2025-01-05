// import React from 'react'
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import './Products.css';

const cardsData = [
    { title: 'EnactSoft', subtitle: 'Affiliate business software development',description:'Based on extensive market research,We develop the best affiliate softare,including the website,app&browser extension for coupon,cashback,in-store,crypto cashback.' },
    { title: 'Coupomated', subtitle: 'SaaS platform to auto-pilot affiliate business operations',description:'An automated coupon content distribution platform,providing a robost coupon API & discount data feed to leading media,coupon websites,and cashback websites.' },
    { title: 'ExtraDonation', subtitle: 'Free fundraising platform for non-profit organizations',description:'Enable fundraisers and charities to rase money for free with our unique business solution.We are aiming to positively impact the world by doing more good work.' },
    { title: 'EnactFeed', subtitle: 'Affiliate automation software for global customers',description:'Global customers can automate their affiliate business by utilizing robust coupon data feeds.Our proprietary tools will hepl you to automate business operations.',come:'comming soon' },
    { title: 'Aidbux', subtitle: 'Free fundraising platform for Creators & Influencers',description:'AidBux enables people to fund selfless creators by raising money while shopping online,without actually paying for it.',come:'comming soon' },
    { title: 'ShoppingHaat', subtitle: 'A platform for small-town stores for online services',description:'An online one-stop-shop offering products and services in tier 3 and 4 regions.use discount codes to offer the best price to customers.',come:'comming soon' }
];
const Products = () => {
    
  return (
    <>
  <div className="cards-grid">
            {cardsData.map((card, index) => (
                <div key={index} className="card">
                    <h3>{card.title}</h3>
                    <h3 style={{color:"blueviolet"}}>{card.subtitle}</h3>
                    <p>{card.description}</p>
                    
                    <p style={{color:"blue",marginTop:"9px",marginLeft:'-82px',marginBottom:'-20px'}}>{card.come}</p>
                </div>
            ))}
        </div>
    </>
  )
}

export default Products
