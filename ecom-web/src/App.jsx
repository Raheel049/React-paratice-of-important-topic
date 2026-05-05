import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Product from './pages/product'
import Contact from './pages/contact'
import About from './pages/about'
import Navbar from './components/Navbar/navbar'
import ProductDetails from './pages/proDetails/productDetails'
import Login from './login'
import SignUp from './signUp'
import PrivateRoute from './privateRoute/privateRoute'
import AuthRoute from './privateRoute/authRoute'
import Logout from './pages/logout'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={< Home />}/>
        <Route element={<PrivateRoute />} >
          <Route path='/product' element={< Product />}/>

        </Route>
        <Route path='/contact' element={< Contact />}/>
        <Route path='/about' element={< About />}/>
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route element={<AuthRoute/>}>
        <Route path='/login' element={< Login />}/>
        <Route path='/signUp'element={<SignUp />} />
        </Route>
        <Route path='/logout' element={<Logout />} />

      </Routes>
    </>
  )
}

export default App
