import React from "react";
import "./CartPage.css";
import user from "../../assets/user.webp";
import Table from "../Common/Table";

const CartPage = () => {
  return (
    <section className="align_center cart_page">
      <div className="align_center user_info">
        <img src={user} alt="user profile" />
        <div>
          <p className="user_name">Bishal</p>
          <p className="user_email">Bishal@gmail.com</p>
        </div>
      </div>

      {/* cart table  */}

      <Table headings={["Item", "Price", "Quantity", "Total", "Remove"]}>
        <tbody>
          <tr>
            <td>IPhone 14</td>
            <td>$999</td>
            <td>1</td>
            <td>$999</td>
            <td>Remove</td>
           
          </tr>
        </tbody>
      </Table>
      <table className="cart_bill">
        <tbody>
          <tr>
            <td>Subtotal</td>
            <td>$999</td>
          </tr>
          <tr>
            <td>Shipping Charge</td>
            <td>$5</td>
          </tr>
          <tr className="cart_bill_final">
            <td>Subtotal</td>
            <td>$1004</td>
          </tr>
        </tbody>
      </table>

      <button className="search_button checkout_button">Checkout</button>
    </section>
  );
};

export default CartPage;