import React from 'react'
import {Link} from 'react-router-dom'
import styles from "./navbar.module.css"

const Navbar = () => {
  return (
    <ul className={styles.nav}>
        <li>
            <Link to={"/"}>Home</Link>
        </li>
        <li>
            <Link to={"/product"}>Product</Link>
        </li>
        <li>
            <Link to={"/contact"}>Contact</Link>
        </li>
        <li>
            <Link to={"/about"}>About</Link>
        </li>
        {/* <li>
            <Link to={"/login"}>Login</Link>
        </li>
        <li>
            <Link to={"/signUp"}>SignUp</Link>
        </li> */}
        <li>
        <Link to={"/logout"}>Logout</Link>
        </li>
    </ul>
  )
}

export default Navbar;