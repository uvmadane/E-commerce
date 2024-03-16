// DescriptionBox.js

import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = ({ cursorPosition, isHovered }) => {
  return (
    <div className="descriptionBox">
      <div className="descriptionBox-navigator">
        <div className="descriptionBox-nav-box">Description</div>
        <div className="descriptionBox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionBox-description">
        {isHovered && (
          <div 
            className="zoomed-area"
            style={{
              position: 'absolute',
              top: cursorPosition.y,
              left: cursorPosition.x,
            }}
          >
            {/* Zoomed content */}
            {/* You can render the zoomed-in content here */}
          </div>
        )}
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id mollitia
          perspiciatis qui recusandae, a libero dolorem voluptas quia,
          voluptatem quisquam officia minima harum eius veritatis soluta ipsam
          praesentium accusantium et voluptate adipisci.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
