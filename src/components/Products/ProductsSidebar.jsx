import React from "react";
import LinkIcon from "../Navbar/LinkIcon";
import "./ProductsSidebar.css";
import useData from "../../hooks/useData";



const ProductsSidebar = () => {

  const {data:category,error}=useData('/category')
  
  
  
  return (
    <aside className="products_sidebar">
      <h2>Category</h2>
      <div className="category_links">
        {error && <em className="form_error">{error}</em>}
        {category && category.map((category) => {
          return (
            <LinkIcon
              key={category._id}
              id={category._id}
              title={category.name}
              sidebar={true}
              link={`/products?category=${category.name}`}
              emoji={category.image}
            />
          );
        })}
      </div>
    </aside>
  );
};

export default ProductsSidebar;
