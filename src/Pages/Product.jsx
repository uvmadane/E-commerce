import React, { useContext, useEffect, useState } from 'react'
import './Css/product.css'
import {ShopContext} from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrum/Breadcrum'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import RelatedProducts from '../Components/RealtedProducts/RelatedProducts'
import { BASE_URL } from '../config'
// import FetchData from './FetchData'

const Product = () => {
    // const {data}=useContext(ShopContext)
    const {id} =useParams();
    const [product,setProduct]=useState('')
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(BASE_URL + `getProductById/${id}`);

        if (response.ok) {
          const result = await response.json();
          console.log("API Response:", result);
          setProduct(result.product);
        } else {
          console.error("Failed to fetch property details");
          // setError("Failed to fetch property details");
        }
      } catch (error) {
        console.error("Error fetching property details:", error);
        // setError("Error fetching property details");
      } finally {
        // setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);


    // const product =data.find((e)=> e.id === Number(id))
    // console.log("product ", product)
  return (
    <div>
    <Breadcrum product={product} />
    {/* <ProductDisplay product={product}/> */}
    {product && <ProductDisplay product={product} />}
    <DescriptionBox/>
    <RelatedProducts/>
      
    </div>
  )
}

export default Product
