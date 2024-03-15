import React, { useContext, useEffect } from "react"
import "./ProductDisplay.css"
import { ShopContext } from "../../Context/ShopContext"
import star from '../Assets/star.png'

const ProductDisplay = (props) => {
  const {product} = props
  const {addToCart}=useContext(ShopContext)
  useEffect(() => {
    // window.scrollTo(0, 0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [product]);
  return (
    <div className="productDisplay">
      <div className="productDisplay-left">
        <div className="productDisplay-img-list">
          <img src={product.image} alt="i" />
          <img src={product.image} alt="i" />
          <img src={product.image} alt="i" />
          <img src={product.image} alt="i" />
        </div>
        <div className="productDisplay-img">
          <img className="productDisplay-main-img" src={product.image} alt="" />
        </div>
      </div>

      <div className="productDisplay-right">
        <h1>{product.name}</h1>
        <div className="productDisplay-right-stars">
          <img src={star} height={10} alt="star icon" />
          <img src={star} height={10} alt="star icon" />
          <img src={star} height={10} alt="star icon" />
          <img src={star} height={10} alt="star icon" />
          <p>(122)</p>
        </div>
        <div className="productDisplay-right-prices">
          <div className="productDisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productDisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productDisplay-right-descrption">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit maiores
          et id!
        </div>
        <div className="productDisplay-right-size">
            <h1>Select size</h1>
            <div className="productDisplay-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className="productDisplay-right-category"><span>Category :</span>Women , T-Short Crop Top</p>
            <p className="productDisplay-right-category"><span>Tags :</span>Modern, Latest</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDisplay
