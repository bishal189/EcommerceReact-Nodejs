import React from "react";
import Table from "../Common/Table";
import "./MyOrderPage.css";

const MyorderPage = () => {
  return (
    <section className="align_center myorder_page">
      <Table headings={["Order", "Product", "Total", "Status"]}>
        <tbody>
          <tr>
            <td>1</td>
            <td>Iphone</td>
            <td>$1299</td>
            <td>Shipped</td>
          </tr>
        </tbody>
      </Table>
    </section>
  );
};

export default MyorderPage;
