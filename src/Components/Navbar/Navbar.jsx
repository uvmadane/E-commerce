import React, { useContext, useEffect, useState } from "react"
import "./Navbar.css"
import logo from "../Assets/shoppe.png"
import cartIcon from "../Assets/cart2.png"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router"
import { ShopContext } from "../../Context/ShopContext"

const Navbar = () => {
  const [userData, setUserData] = useState("")
  useEffect(() => {
    const loginInfo = localStorage.getItem("ShopUser")
    if (loginInfo) {
      const data = JSON.parse(loginInfo)
      setUserData(data)
    }
  },[localStorage.getItem("ShopUser")])
  
  const navigate = useNavigate(); 
  const logout =()=>{
    localStorage.removeItem("ShopUser")
    setUserData('')
    // Navigate("/")
    navigate('/')
  }
  console.log(userData)
  const [menu, setMenu] = useState("shop")
  const { getTotalCartItems } = useContext(ShopContext)
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" height={40} />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop")
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>{" "}
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mens")
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/mens">
            Men
          </Link>{" "}
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("womens")
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/womens">
            Women
          </Link>{" "}
          {menu === "womens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids")
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/kids">
            Kids
          </Link>{" "}
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        {userData?.status!==true ? <Link to="/login"><button>Login</button></Link> :  <button onClick={logout}>Logout</button>}
        <Link to="/cart">
          <img src={cartIcon} className="img1" alt="" height={100} />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
