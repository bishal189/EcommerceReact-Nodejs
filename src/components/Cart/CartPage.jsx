import React from "react";
import "./CartPage.css";
import Table from "../Common/Table";
import QuantityInput from "../SingleProduct/QuantityInput";
import remove from "../../assets/remove.png";
import { useState, useEffect, useContext } from "react";
import UserContext from "../../context/userContext";
import cartContext from "../../context/cartContext";
import apiClient from "../../utils/api-client";
import { toast } from "react-toastify";
import { checkOutAPI } from "../../Services/checkout";

const CartPage = () => {
  const [subTotal, setSubTotal] = useState(0);
  const userObj = useContext(UserContext);
  const { cart, removeFromCart, updateCart, setCart } = useContext(cartContext);

  useEffect(() => {
    console.log("hello cart page reload");
    let total = 0;
    cart.forEach((item) => {
      total += item.product.price * item.quantity;
      setSubTotal(total);
    });
  });

  function checkOut() {
    const oldCart = [...cart];
    checkOutAPI()
      .then((res) => {
        toast.success("Order placed successfully ");
        setCart([]);
      })
      .catch((err) => {
        setCart(oldCart);
      });
  }

  return (
    <section className="align_center cart_page">
      <div className="align_center user_info">
        <img
          src={`http://localhost:5000/profile/${userObj?.profilePic}`}
          alt="user profile"
        />
        <div>
          <p className="user_name">Name:{userObj?.name}</p>
          <p className="user_email">Email:{userObj?.email}</p>
        </div>
      </div>

      {/* cart table  */}

      <Table headings={["Item", "Price", "Quantity", "Total", "Remove"]}>
        <tbody>
          {cart.map(({ product, quantity }) => (
            <tr key={product._id}>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td className="table_quantity_input">
                <QuantityInput
                  quantity={quantity}
                  stock={product.stock}
                  setQuantity={updateCart}
                  CartPage={true}
                  productId={product._id}
                />
              </td>
              <td>${quantity * product.price}</td>
              <td>
                <img
                  src={remove}
                  alt=""
                  className="cart_remove"
                  onClick={() => removeFromCart(product._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <table className="cart_bill">
        <tbody>
          <tr>
            <td>Subtotal</td>
            <td>${subTotal}</td>
          </tr>
          <tr>
            <td>Shipping Charge</td>
            <td>$5</td>
          </tr>
          <tr className="cart_bill_final">
            <td>Subtotal</td>
            <td>${subTotal + 5}</td>
          </tr>
        </tbody>
      </table>

      <button className="search_button checkout_button" onClick={checkOut}>
        Checkout
      </button>
    </section>
  );
};

export default CartPage;
