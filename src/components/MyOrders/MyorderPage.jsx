import React from "react";
import Table from "../Common/Table";
import "./MyOrderPage.css";
import { orderAPI } from "../../Services/orderServices";
import { useState } from "react";
import useData from "../../hooks/useData";
import Loader from "../Common/Loader";

const MyorderPage = () => {
  const { data: orders, error, isLoading } = useData("/order");

  const getProductString=order=>{
    const productString=order.products.map(p=>`${p.product.title}${p.quantity}`)
    return productString.join(", ")
  }

  
  return (
    <section className="align_center myorder_page">
      {isLoading && <Loader/>}
      {error && <em className="form_error">{error}</em>}
      {orders && (
        <Table headings={["Order", "Product", "Total", "Status"]}>
          <tbody>
           {
            orders.map((order,index) => (
              <tr key={order._id}>
                <td>{index+1}</td>
                <td>{getProductString(order)}</td>
                <td>${order.total}</td>
                <td>{order.status}</td>
              </tr>
            ))
           }
          </tbody>
        </Table>
      )}
    </section>
  );
};

export default MyorderPage;
