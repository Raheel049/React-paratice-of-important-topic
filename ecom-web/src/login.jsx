import React, { useState } from 'react'
import styles from "./login.module.css"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './firebase'
import { useNavigate } from 'react-router-dom'
const Login = () => {

    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const loginHandler = async() => {
        try {
        const res = await signInWithEmailAndPassword(auth, email, password)
            console.log("login",res)
            navigate("/product")
            localStorage.setItem("uid",res.user.uid)
        } catch (error) {
            console.log("error", error.massege)
        }        
    }

  return (

    <>
        <h1 style={{textAlign:"center"}}>Login Here!</h1>
        <div className={styles.loginCont}>
            <input type="text" placeholder='Enter your email' onChange={(e) => {
                setEmail(e.target.value)
            }} />
            <input type="password" placeholder='Enter your password' onChange={(e) => {
                setPassword(e.target.value)
            }} />
            <button onClick={loginHandler}>Login</button>
        </div>
    </>
  )
}

export default Login;