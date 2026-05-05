import React, { useState } from 'react'
import styles from "./signUp.module.css"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from './firebase'
import { useNavigate } from 'react-router-dom'
const SignUp = () => {

    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const SignUpHandler = async() => {
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)
            console.log(res)
            navigate("/login")
        } catch (error) {
            console.log("error", error.massege)
        }
    }

  return (

    <>
        <h1 style={{textAlign:"center"}}>SignUp Here!</h1>
        <div className={styles.SignUpCont}>
            <input type="text" placeholder='Enter your email' onChange={(e) => {
                setEmail(e.target.value)
            }} />
            <input type="password" placeholder='Enter your password' onChange={(e) => {
                setPassword(e.target.value)
            }} />
            <button onClick={SignUpHandler}>SignUp</button>
        </div>
    </>
  )
}

export default SignUp;