import React, { useState } from "react"
import "./Css/LoginSignup.css"
import { BASE_URL } from "../config"
import { Link } from "react-router-dom"
import { useNavigate} from "react-router"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [successMessage, setSuccessMessage] = useState(null)
  const [error, setError] = useState(null)

  const navigate =useNavigate();

  const login = async (e) => {
    e.preventDefault()
    setError('')
    setSuccessMessage('')
    try {
      const response = await fetch(BASE_URL + "loginUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
      const data = await response.json()

      if (data.status === true) {
        localStorage.setItem("ShopUser", JSON.stringify(data))
        setSuccessMessage("Login successful!")
        console.log("Login successful!")
        navigate('/')
        // history.push('/')
      } else {  
        console.log("Login failed", data.error)  
        setError(data.error)
      }
    } catch (error) {
      console.error("An error occurred during login:", error)
      console.log("An error occurred. Please try again.")
    }
  }
  return (
    <div className="loginSignUp">
      <div className="loginSignUp-container">
        <h1>Login</h1>
        <form onSubmit={login}>
            <Link to='/'>
            <h3>{successMessage && successMessage} </h3>
            </Link>
          <div className="loginSignUp-fields">
            <input
              type="email"
              placeholder="Email Address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p style={{marginTop:"20px"}}>{error && error}</p>
          {/* <h3>{successMessage && successMessage} </h3> */}

          <button type="submit">Login</button>
        </form>
        <p className="loginSignUp-login">
          Don't have an account?
          <Link to="/register" style={{ textDecoration: "none" }}>
            <span> Sign Up!</span>
          </Link>
        </p>
        <div className="loginSignUp-agree">
          <input type="checkbox" />
          <p>By Continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default Login
