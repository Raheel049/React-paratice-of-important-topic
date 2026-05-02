import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

    const param = useParams()
    console.log("params", param)

    const [proDetails, setProDetails] = useState({})

    useEffect(() => {
        fetchProduct()
    },[])

    const fetchProduct = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${param.id}`)
        setProDetails(response.data) 
    }

  return (
    <>
        <div>
            <img src={proDetails.image} width={200} alt="" />
            <h1>{proDetails.title}</h1>
            <h3>{proDetails.price}</h3>
        </div>
    </>
  )
}

export default ProductDetails