import React from 'react'
import arrow_icon from '../Assets/greater-than-sign-icon.jpg'
import './Breadcrum.css'

const Breadcrum = (props) => {
    const {product}=props

  return (
    <div className='breadcrum'>
    Home   
    <img src={arrow_icon} alt='icon' height={15} />
    SHOP 
    <img src={arrow_icon} alt='icon' height={15}/>
    {product.category} 
    <img src={arrow_icon} alt='icon' height={15}/>
    {product.name} 

    </div>
  )
}

export default Breadcrum;
