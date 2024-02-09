import React from "react";
import "./ProductList.css";
import ProductCard from "../Home/ProductCard";
import useData from "../../hooks/useData";


const ProductList = () => {
  const {data,error}=useData('/products')
  // console.log(products,'**********')
  
  return (
    <section className="products_list_section">
      <header className="align_center products_list_header">
        <h2>Products</h2>
        <select name="sort" id="" className="products_sorting">
          <option value="">Relevance</option>
          <option value="prirce des">Price HIGH to LOW</option>
          <option value="price asc">Price Low to High</option>
          <option value="rate desc">Rate High to Low</option>
          <option value="rate asc">Rate Low to High</option>
        </select>
      </header>
      <div className="products_list">
        {error && <em className="form_error">{error}</em>}
        {data.products && data.products.map((product) => (
          <ProductCard
            key={product._id}
            id={product._id}
            price={product.price}
            title={product.title}
            images={product.images[0]}
            rating={product.reviews.rate}
            rateCounts={product.reviews.count}
            stock={product.stock}
            
          />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
