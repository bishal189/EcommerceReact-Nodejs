import React from "react";
import "./App.css";
import UserContext from "./context/userContext";
import cartContext from "./context/cartContext";
import Routing from "./components/Routing/Routing";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { addToCartAPI, getCartAPI ,removeFromCartAPI} from "./Services/cartServices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

setAuthToken(localStorage.getItem("token"));

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


  //add to cart 
  const addToCart = (product, quantity) => {
    const updatedCart = [...cart];
    const productIndex = updatedCart.findIndex(
      (item) => item.product._id === product._id
    );
    if (productIndex == -1) {
      updatedCart.push({
        product: product,
        quantity: quantity,
      });
    } else {
      updatedCart[productIndex].quantity += quantity;
    }
    setCart(updatedCart);
    addToCartAPI(product._id, quantity)
      .then((res) => {
        toast.success("Product Added successfully.");
      })
      .catch((error) => {
        toast.success("Producd failed to add successfully.");
        setCart(cart);
      });
  };




//remove cart



  const removeFromCart = (id) => {
    const oldCart=[...cart]
    const newCart=oldCart.filter((item)=>(item.product._id!==id))
    setCart(newCart)
    removeFromCartAPI(id).then((res)=>{
      toast.success("Product removed successfully.")
    }).catch(err=>{ 
      toast.error("Product failed to remove successfully.")
      setCart(oldCart)
    })
  }
    
  const getCart = () => {
    getCartAPI()
      .then((res) => {
        console.log(res.data);
        setCart(res.data);
      })
      .catch((error) => {
        toast.error("some thing went wrong");
      });
  };

  useEffect(() => {
    if (user) {
      getCart();
    }
  }, [user]);

  return (
    <UserContext.Provider value={user}>
      <cartContext.Provider value={{cart,addToCart,removeFromCart}}>
      <div className="App">
        <Navbar />

        <main>
          <ToastContainer position="bottom-right" />
          <Routing />
        </main>
      </div>
      </cartContext.Provider>
    </UserContext.Provider>
  );
};

export default App;
