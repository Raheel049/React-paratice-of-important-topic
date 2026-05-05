import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from "./product.module.css"
import { Link } from 'react-router-dom'

const Product = () => {

    const [productData, setProductData] = useState([])

    useEffect(() => {
        fetchApiData()
    },[])

    const fetchApiData = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products`)
        setProductData(response.data)
        console.log(response.data)
    }

    console.log(productData)

  return (
    <div className={styles.mainCont}>
        {
            productData.map((obj,index) => {
                return (
                    <div key={index} className={styles.card}>
                        <img src={obj.image} alt="" width={100}/>
                        <h1>
                            <Link to={`/product/${obj.id}`}>{obj.title}</Link>
                        </h1>
                        <h2>{obj.price}</h2>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Product