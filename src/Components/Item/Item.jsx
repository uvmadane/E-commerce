import React from "react"
import "./Item.css"
import { Link } from "react-router-dom"
import { BASE_URL } from "../../config"
const Item = (props) => {
  console.log(BASE_URL + props.image)
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img
          loader={({ src }) => `${BASE_URL}${src}`}
          src={`${BASE_URL + props.image}`}
          alt="a"
          height={200}
        />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">₹ {props.new_price}</div>
        <div className="item-price-old">₹ {props.old_price}</div>
      </div>
    </div>
  )
}
export default Item
