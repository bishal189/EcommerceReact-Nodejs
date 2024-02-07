import React from 'react'
import  "./App.css"
import CartPage from './components/Cart/CartPage'
import Home from './components/Home/Home'
import MyorderPage from './components/MyOrders/MyorderPage'
import Navbar from './components/Navbar/Navbar'
import ProductsPage from './components/Products/ProductsPage'
import SingleProductPage from './components/SingleProduct/SingleProductPage'

const App = () => {
  return (
    <div className='App'>
      <Navbar/>

      <main>
      {/* <Home/> */}

      {/* <ProductsPage/> */}
      {/* <SingleProductPage/> */}
      {/* <CartPage/> */}
      <MyorderPage/>
      </main>
      
    </div>
  )
}

export default App
