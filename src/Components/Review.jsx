// import React from 'react'
import './Review.css'

const Reviews=[
  {rating:"5/5",
    matter:"'No matter its a day or night,there are responses to my inquiries and resolves my concerns in less than an hour.'",
    icon:'https://freesvg.org/storage/img/thumb/16231559165-star-rating-condensed.png',
    name:"He Wang",founder:"Founder at,Cashbackist,Inc."},
    {rating:"5/5",
      matter:"“Best thing about EnactOn is they have all under-one-roof solution for end-to-end business requirements.”",
      icon:'https://freesvg.org/storage/img/thumb/16231559165-star-rating-condensed.png',
      name:"Tejprakash",founder:"Founder at, AdGaem"},
      {rating:"5/5",
        matter:"“We appreciate their attention to detail and creative approach in bringing our new exhibit to life online.”",
        icon:'https://freesvg.org/storage/img/thumb/16231559165-star-rating-condensed.png',
        name:"Y Sreekanth",founder:"Founder at, Cashkart365."},
        {rating:"5/5",
          matter:"“EnactOn provided me with a more comprehensive proposal than I asked for, which helped me proceed smoothly with development.”",
          icon:'https://freesvg.org/storage/img/thumb/16231559165-star-rating-condensed.png',
          name:"Tejas Ahobala",founder:"Founder at,Khareedhi "},
          {rating:"5/5",
            matter:"“All my worries and thinking turned in positive ways when I came across expert team of EnactOn technologies.”",
            icon:'https://freesvg.org/storage/img/thumb/16231559165-star-rating-condensed.png',
            name:"Aaksh Soni",founder:"Founder at,DealNol "},
            {rating:"5/5",
              matter:"“The technical approach to a solution has been their core strength. Overall domain and business expertise is truly remarkable.”",
              icon:'https://freesvg.org/storage/img/thumb/16231559165-star-rating-condensed.png',
              name:"Quartzobr",founder:"Founder at,Kahle.com.br "},
]
const Review = () => {
  return (
    <>
        <div className='rev'>
            <h2>Review</h2>
            <h3>What Our Client Says</h3>
        </div>
        <div className='rev-grid'>
          {Reviews.map((rev,index)=>
          <div key={index} className='car'>
          <p className='con'>{rev.rating}</p>
          <p className='con' style={{fontSize:"14px",fontWeight:"bold"}}>{rev.matter}</p>
          <img src={rev.icon} className='star'></img>
          <p className='con' style={{color:"rgb(6, 96, 132)"}}>{rev.name}</p>
          <p className='con'>{rev.founder}</p>
          </div>
          )}
        </div>
    </>
  )
}

export default Review;