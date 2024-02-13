import React from "react";
import "./App.css";
import Routing from "./components/Routing/Routing";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import {addToCartAPI, getCartAPI} from "./Services/cartServices";
import {ToastContainer,toast} from 'react-toastify'
import'react-toastify/dist/ReactToastify.css'
setAuthToken(localStorage.getItem('token'))


const App = () => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    console.log('it must run')
    try {
      const jwt = localStorage.getItem("token");
      const jwtUser = jwtDecode(jwt);
      if (Date.now() >= jwtUser.exp * 1000) {
        localStorage.removeItem("token");
        location.reload();
      } else {
        setUser(jwtUser);
      }
    } catch (err) {}
  }, []);

  const addToCart = (product, quantity) => {
    const updatedCart = [...cart];
    const productIndex = updatedCart.findIndex(
      (item) => item.product._id === product._id
    );
    if (productIndex==-1){
      updatedCart.push({
        product: product,
        quantity: quantity
      })}
      else{
        updatedCart[productIndex].quantity += quantity
      }
     setCart(updatedCart)
     addToCartAPI(product._id,quantity).then((res)=>{
      toast.success('Product Added successfully.')
     }).catch((error)=>{
      toast.success('Producd failed to add successfully.')
      setCart(cart)
     })
    
  };





  const getCart=()=>{
       getCartAPI().then(res=>{
        console.log(res.data)
        setCart(res.data)
       }).catch(error=>{
         toast.error("some thing went wrong")
       })
       }

  useEffect(()=>{
    if(user){
      getCart()
    }
  },[user])     






  return (
    <div className="App">
      <Navbar user={user} cartCount={cart.length} />

      <main>
        <ToastContainer position="bottom-right"/> 
        <Routing addToCart={addToCart} cart={cart} />
      </main>
    </div>
  );
};

export default App;
