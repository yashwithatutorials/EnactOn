import React from 'react'
 import './Solution.css'



const industries = [
    { name: "Banking & Finance", icon: "🏦" },
    { name: "Healthcare & Medicine", icon: "🏥" },
    { name: "Travel & Tourism", icon: "✈️" },
    { name: "Real Estate", icon: "🏠" },
    { name: "Restaurants", icon: "🍽️" },
    { name: "E-learning", icon: "🎧" },
    { name: "E-commerce", icon: "🛒" },
    { name: "Logistics & Procurement", icon: "🚚" },
    { name: "Social Network", icon: "👥" },
    { name: "SaaS", icon: "💻" },
    { name: "Startup", icon: "📁" },
    { name: "Advertising", icon: "📢" },
    { name: "Retail store", icon: "🛍️" },
    { name: "Media & Entertainment", icon: "📹" },
    { name: "Gaming", icon: "🎮" },
];
const Solution = () => {
  return (
    <>
        <div className='busi'>
            <h2 style={{color:'brown'}}>Business Solutions</h2>
            <h3 className='ind'>Industries We Serve</h3>
<div className="industry-section">
            
            <div className="gri">
                {industries.map((industry, index) => (
                    <div key={index} className="industry-card">
                        <div className="icon ">{industry.icon}</div>
                        <p>{industry.name}</p>
                    </div>
                ))}
            </div>
        </div>
        </div>
    </>
  )
}

export default Solution