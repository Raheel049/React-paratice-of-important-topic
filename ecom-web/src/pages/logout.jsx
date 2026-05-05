import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./logout.module.css"

const Logout = () => {

    const navigate = useNavigate()


    const logoutHandler = () => {

        localStorage.removeItem("uid")
        navigate("/login")
    }

  return (
    <>
        <h1 style={{textAlign:"center"}}>Are your sure your want to Logout?</h1>
        <div className={styles.container}>
            <button onClick={logoutHandler} className={styles.btn}>Logout</button>

        </div>
    </>
  )
}

export default Logout;