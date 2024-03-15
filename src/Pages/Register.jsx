import React, { useState } from "react"
import "./Css/LoginSignup.css"
import { BASE_URL } from "../config"
import { Link } from "react-router-dom"
import { useNavigate} from "react-router"


const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    username: "",
    email: "",
    password: "",
  })

  const [error, setError] = useState([])
  // const router = useRouter();
  const navigate =useNavigate();

  const handleChange = (e)=>{
    const {name , value}= e.target

    setFormData((prevData)=>({
       ...prevData,
       [name]:value 
    }))
  }

  const login = async (e) => {
    e.preventDefault()
    setError('')
    try {
      const response = await fetch(BASE_URL + "register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      const data = await response.json()

      if (response.status===200) {
        console.error("Registration successfully ")
        setError("Registration successful")
        // router.push('/')
        navigate('/login')
      } else {
        setError("Login failed "+ data.error)
      }
    } catch (error) {
      console.error("An error occurred during login:", error)
      setError("An error occurred. Please try again.")
    }
  }
  return (
    <div className="loginSignUp">
      <div className="loginSignUp-container">
        <h1>Sign Up</h1>
        <div className="loginSignUp-fields">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact No"
            value={formData.contact}
            onChange={handleChange}
          />
          <input
            type="text"
            name="username"
            placeholder="User Name"
            value={formData.username}
            onChange={handleChange}
          />
          <input
            required
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            required
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        {error && <div className="text-danger">{error}</div>}
        <button onClick={login}>Continue</button>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <p className="loginSignUp-login">
            Already have an account? <span>Login</span>
          </p>
        </Link>
        <div className="loginSignUp-agree">
          <input type="checkbox" />
          <p>By Continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default Register
