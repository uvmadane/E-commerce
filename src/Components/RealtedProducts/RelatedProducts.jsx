import React from "react"
import "./RelatedProducts.css"
import Item from "../Item/Item"
import all_product from "../Assets/data/all_product"

const RelatedProducts = () => {
  return (
    <div className="relatedProducts">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedProducts-item">
        {all_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          )
        })}
      </div>
    </div>
  )
}

export default RelatedProducts
