import React from 'react'
import  "./App.css"
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <div className='App'>
      <Navbar/>

      <main>
      <Home/>
      </main>
      
    </div>
  )
}

export default App
