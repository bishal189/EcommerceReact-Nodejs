import React from 'react'
import  "./App.css"
import Home from './components/Home/Home'
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
      <SingleProductPage/>
      </main>
      
    </div>
  )
}

export default App
