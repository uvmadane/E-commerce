import React from "react"
import "./DescriptionBox.css"

const DescriptionBox = () => {
  return (
    <div className="descriptionBox">
      <div className="descriptionBox-navigator">
        <div className="descriptionBox-nav-box">Description</div>
        <div className="descriptionBox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionBox-description">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id mollitia
          perspiciatis qui recusandae, a libero dolorem voluptas quia,
          voluptatem quisquam officia minima harum eius veritatis soluta ipsam
          praesentium accusantium et voluptate adipisci.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
