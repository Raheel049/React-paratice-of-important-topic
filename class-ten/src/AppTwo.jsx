import NavBar from "./Component/navbar/navbar"
import { Route, Routes } from "react-router-dom"
// import Home from "./pagess/home"
// import About from "./pagess/about/about"
// import Contact from "./pagess/contact/contact"
// import Productt from "./pagess/product/product"
// import ProductDetail from "./pagess/ProductDetails"
import Home from "./pagess/home/home"
import About from "./pagess/about/about"
import Contact from "./pagess/contact/contact"
import Productt from "./pagess/product/product"
import ProductDetails from "./pagess/productDetails"


const AppTwo = () => {
    return(
        <>
           <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product" element={<Productt />} />

            <Route path="/product/:id" element={<ProductDetails />} />

           </Routes>
        </>
    )
}

export default AppTwo