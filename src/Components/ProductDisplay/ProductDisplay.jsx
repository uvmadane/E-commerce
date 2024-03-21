import React, { useContext, useEffect, useState } from "react"
import "./ProductDisplay.css"
import { ShopContext } from "../../Context/ShopContext"
import star from "../Assets/star.png"
import { BASE_URL } from "../../config"

const ProductDisplay = (props) => {
  const { product } = props
  const { addToCart } = useContext(ShopContext)
  // const [mainImage, setMainImage] = useState(BASE_URL+product?.images[0]);
  const [mainImage, setMainImage] = useState(product.images && product.images.length > 0 ? BASE_URL + product?.images[0] : "");


  useEffect(() => {
    console.log(product)
    // window.scrollTo(0, 0);
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [product])
  return (
    <div className="productDisplay">
      <div className="productDisplay-left">
        {product.images && product.images.length > 0 && (
          <div className="productDisplay-img-list">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={BASE_URL + image}
                alt={`thumbnail-${index}`}
                onClick={()=>setMainImage(BASE_URL+image)}
              />
            ))}
          </div>
        )}

        <div className="productDisplay-img">
          {/* <img className="productDisplay-main-img" src={product.image} alt="" /> */}
          <img
            className="productDisplay-main-img"
            // src={BASE_URL+mainImage}
            loader={({ src }) => `${BASE_URL}${src}`}
            src={product.images && product.images.length > 0 ? mainImage : ""}

            alt="main-product-image"
          />
        </div>
      </div>

      <div className="productDisplay-right">
        <h1>{product?.name}</h1>
        <div className="productDisplay-right-stars">
          <img src={star} height={10} alt="star icon" />
          <img src={star} height={10} alt="star icon" />
          <img src={star} height={10} alt="star icon" />
          <img src={star} height={10} alt="star icon" />
          <p>(122)</p>
        </div>
        <div className="productDisplay-right-prices">
          <div className="productDisplay-right-price-old">
            ₹ {product?.old_price}
          </div>
          <div className="productDisplay-right-price-new">
            ₹ {product?.new_price}
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
          <button
            onClick={() => {
              addToCart(product.id)
            }}
          >
            ADD TO CART
          </button>
          <p className="productDisplay-right-category">
            <span>Category :</span>Women , T-Short Crop Top
          </p>
          <p className="productDisplay-right-category">
            <span>Tags :</span>Modern, Latest
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductDisplay
