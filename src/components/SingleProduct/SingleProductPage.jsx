import React from "react";
import { useState } from "react";
import QuantityInput from "./QuantityInput";
import "./SingleProductPage.css";

const SingleProductPage = () => {

    const [selectedImage,setSelectedImage]=useState(0)
  const product = {
    id: 1,
    title: "Product Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime aliquid rerum a? Fugiat soluta facilis deleniti voluptatibus ab architecto dolores a, vero, beatae veniam error doloribus quia laudantium? Error fuga consequuntur quia accusantium? Consequatur modi laboriosam saepe culpa, ab atque.",
    price: 9.99,
    images: [
      "https://via.placeholder.com/500x500?text=Product+Image+1",
      "https://via.placeholder.com/500x500?text=Product+Image+2",
      "https://via.placeholder.com/500x500?text=Product+Image+3",
      "https://via.placeholder.com/500x500?text=Product+Image+4",
    ],
    stock: 10,
  };

  return (
    <section className="align_center single_product">
    <div className="align_center">
      <div className="single_product_thumbnails">
        {product.images.map((image, index) => 
          <img 
          key={index} src={image} alt={product.title}  onClick={()=>setSelectedImage(index)}
          className={selectedImage===index?"selected_image":""}
          />
        )}
      </div>
      <img
        src={product.images[selectedImage]} 
        alt={product.title} 
        className="single_product_display"
      />
    </div>
  
    <div className="single_product_details">
      <h1 className="single_product_title">{product.title}</h1>
      <p className="single_product_description">{product.description}</p>
      <p className="single_product_price">{product.price.toFixed(2)}</p>
      <h2 className="quantity_title">Quantity:</h2>
      <QuantityInput/>
      <button className="search_button add_cart">Add To Cart</button>


    </div>
  </section>
  );
};

export default SingleProductPage;
