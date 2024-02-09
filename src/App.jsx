import React from 'react'
import  "./App.css"
import Routing from './components/Routing/Routing'
import Navbar from './components/Navbar/Navbar'


const App = () => {
  return (
    <div className='App'>
      <Navbar/>

      <main>
        
      <Routing/>
      </main>
      
    </div>
  )
}

export default App
