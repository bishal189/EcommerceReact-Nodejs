import React from "react";
import "./App.css";
import Routing from "./components/Routing/Routing";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const App = () => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  useEffect(() => {
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
    
  };
console.log(cart)
  return (
    <div className="App">
      <Navbar user={user} cartCount={cart.length} />

      <main>
        <Routing addToCart={addToCart} />
      </main>
    </div>
  );
};

export default App;
