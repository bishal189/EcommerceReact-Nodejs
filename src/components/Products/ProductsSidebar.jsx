import React from "react";
import LinkIcon from "../Navbar/LinkIcon";
import "./ProductsSidebar.css";
import rocket from "../../assets/rocket.png";
import { useState } from "react";
import { useEffect } from "react";
import apiClients from "../../utils/api-client";

const ProductsSidebar = () => {
  const [category, setCategory] = useState([]);
  const [error, setError] = useState([]);
  useEffect(() => {
    apiClients
      .get("/category")
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);
  console.log(category);
  return (
    <aside className="products_sidebar">
      <h2>Category</h2>
      <div className="category_links">
        {error && <em className="form_control">{error}</em>}
        {category.map((category) => {
          return (
            <LinkIcon
              id={category._id}
              title={category.name}
              sidebar={true}
              link={`products?category=${category.name}`}
              emoji={category.image}
            />
          );
        })}
      </div>
    </aside>
  );
};

export default ProductsSidebar;
