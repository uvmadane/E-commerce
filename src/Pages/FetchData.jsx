import React, { useEffect, useState } from "react"
import { BASE_URL } from "../config"

const FetchData = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(BASE_URL + "getAllProduct")

        if (response.ok) {
          const result = await response.json()
          setData(result.product)
          console.log("Product retrieved success")
        } else {
          console.error("Failed")
        }
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }
    fetchData()
  }, [])

  console.log(data)

  return {data}
}

export default FetchData
