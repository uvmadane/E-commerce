import React from "react"
import "./Popular.css"
import Item from "../Item/Item"
import data_product from "../Assets/data/data_product"
import FetchData from "../../Pages/FetchData"

const Popular = () => {
  const {data}=FetchData();
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="collections">
        {data.map((item, i) => {
          return (
            <Item
              key={i}
              id={item._id}
              name={item.name}
              image={item.images[0]}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Popular
