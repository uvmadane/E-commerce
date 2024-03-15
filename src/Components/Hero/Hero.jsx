import React from "react"
import "./hero.css"
import mainImg from '../Assets/sgirl.jpg'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVAL ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src="" alt="none" />
          </div>
          <p>Collection</p>
          <p>For Everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src="" alt="" />
        </div>
      </div>

      <div className="hero-right">
        <img className='img12' src={mainImg} alt="asdas" height={400} />
      </div>
    </div>
  )
}

export default Hero
