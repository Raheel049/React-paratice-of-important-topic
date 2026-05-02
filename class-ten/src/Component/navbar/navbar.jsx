import { Link, NavLink } from "react-router-dom";
import styles from "./navbar.module.css"

const NavBar = () => {
    return(
        <>
            <ul className={styles.navbar}>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/about"}>About</Link>
                </li>
                <li>
                    <Link to={"/contact"}>Contact</Link>
                </li>
                <li>
                    <Link to={"/product"}>Product</Link>
                </li>
            </ul>
        </>
    );
}

export default NavBar