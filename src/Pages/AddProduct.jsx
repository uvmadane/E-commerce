import React, { useEffect, useState } from "react"
import "./Css/LoginSignup.css"
import { BASE_URL } from "../config"
import { Link } from "react-router-dom"
import { useNavigate} from "react-router"

const AddProduct = () => {
    const [formData, setFormData] = useState({
    name: "",
    category: "",
    new_price: "",
    old_price: "",
    images:[]
})

useEffect(()=>{
    console.log(formData)
},[formData])
const [error, setError] = useState([])
  const navigate =useNavigate();

  const handleChange = (e)=>{
    const {name , value}= e.target

    setFormData((prevData)=>({
       ...prevData,
       [name]:value 
    }))
  }
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prevData) => ({
      ...prevData,
      images: files,
    }));
  };
  const addProductCall = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('category', formData.category);
      formDataToSend.append('quantity', formData.quantity);
      formDataToSend.append('new_price', formData.new_price);
      formDataToSend.append('old_price', formData.old_price);
      formData.images.forEach((image, index) => {
        formDataToSend.append('images', image);
      });
      
  
      const response = await fetch(BASE_URL + 'addProduct', {
        method: 'POST',
        body: (formDataToSend),
      });
      const data = await response.json();
  
      if (response.ok) {
        console.log('Product added successfully');
        setError('Product added successfully');
        // navigate('/');
      } else {
        setError('Failed to add product: ' + data.error);
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
      setError('An error occurred. Please try again.');
    }
  };
  
  return (
    <div className="loginSignUp">
      <div className="loginSignUp-container">
        <h1>Sign Up</h1>
        <div className="loginSignUp-fields">
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="category"
            placeholder="category No"
            value={formData.category}
            onChange={handleChange}
          />
          <input
            type="text"
            name="quantity"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={handleChange}
          />
          <input
            required
            type="number"
            name="new_price"
            placeholder="New Price"
            value={formData.new_price}
            onChange={handleChange}
          />
          <input
            required
            type="number"
            name="old_price"
            placeholder="Old Price"
            value={formData.old_price}
            onChange={handleChange}
          />
            <input
              type="file"
              onChange={handleFileChange}
              multiple
            //   accept="image/png, image/gif, image/jpeg"
            />
          {/* <input
            required
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          /> */}
        </div>
        {error && <div className="text-danger">{error}</div>}
        <button onClick={addProductCall}>Add Product</button>
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

export default AddProduct
