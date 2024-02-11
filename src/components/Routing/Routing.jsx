

import React from 'react'
import {Routes,Route} from 'react-router-dom'
import LoginPage from '../Authentication/LoginPage'
import Logout from '../Authentication/Logout'
import SignupPage from '../Authentication/SignUpPage'
import CartPage from '../Cart/CartPage'
import Home from '../Home/Home'
import MyorderPage from '../MyOrders/MyorderPage'
import ProductsPage from '../Products/ProductsPage'
import SingleProductPage from '../SingleProduct/SingleProductPage'


const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
      <Route path='/cart' element={<CartPage/>}/>
      <Route path='/myorder' element={<MyorderPage/>}/>
      <Route path='/products' element={<ProductsPage/>}/>
      <Route path='/product/:id' element={<SingleProductPage/>}/>
      <Route path='/logout' element={<Logout/>}/>
    </Routes>
  )
}

export default Routing
