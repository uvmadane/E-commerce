import React from 'react'
import './Offers.css'
import img from '../Assets/10.jpg'
const Offers = () => {
  return (
    <div className='offers'>
    <div className="offer-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
    </div>
    <div className="offers-right">
        <img src={img} height={200} alt="offers img" />
    </div>
      
    </div>
  )
}

export default Offers

