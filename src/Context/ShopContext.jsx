import React, { createContext, useState } from "react"
// import all_product from "../Components/Assets/data/all_product"
import FetchData from "../Pages/FetchData"

export const ShopContext = createContext(null)

const ShopContextProvider = (props) => {
  const {data} =FetchData();

  
const getDefaultCart = () => {
  let cart = {}
  for (let index = 0; index < data.length + 1; index++) {
    cart[index] = 0;
  }
  return cart
}

  const [cartItems, setCartItems] = useState(getDefaultCart())

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    console.log(cartItems)
  }
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      console.log("er",item)
      if (cartItems[item] > 0) {
        let itemInfo = data.find(
          (product) => product.id === Number(item)
        )
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  }
  const getTotalCartItems =() =>{
    let totalItem =0;
    for(const item in cartItems)
    {
      if(cartItems[item]>0)
      {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  }
  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    data,
    cartItems,
    addToCart,
    removeFromCart,
  }
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
