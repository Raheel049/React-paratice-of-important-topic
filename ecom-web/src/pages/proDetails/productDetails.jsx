import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

    const param = useParams()
    const [productData, setProductData] = useState({})

    useEffect(() => {
        fetchProData()
    },[])
    
    const fetchProData = async() => {
        const response = await axios.get(`https://fakestoreapi.com/products/${param.id}`);
        setProductData(response.data)
    }

  return (
    <div>
        <img src={productData.image} alt="" />
        <h1>{productData.title}</h1>
        <h2>{productData.price}</h2>
    </div>
  )
}

export default ProductDetails