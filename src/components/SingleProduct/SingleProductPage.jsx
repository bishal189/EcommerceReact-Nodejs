import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useData from "../../hooks/useData";
import Loader from "../Common/Loader";
import QuantityInput from "./QuantityInput";
import "./SingleProductPage.css";
import { useContext } from "react";
import cartContext from "../../context/cartContext";
import UserContext from "../../context/userContext";

const SingleProductPage = () => {
  const [quantity, setQuantity] = useState(1);

  const [selectedImage, setSelectedImage] = useState(0);
  const { cart, addToCart } = useContext(cartContext);
  const userObj = useContext(UserContext);

  const { id } = useParams();
  const { data: product, error, isLoading } = useData(`/products/${id}`);

  return (
    <section className="align_center single_product">
      {error && <em className="form_error">{error}</em>}
      {isLoading && <Loader />}

      {product && (
        <>
          <div className="align_center">
            <div className="single_product_thumbnails">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={`http://localhost:5000/products/${image}`}
                  alt={product.title}
                  onClick={() => setSelectedImage(index)}
                  className={selectedImage === index ? "selected_image" : ""}
                />
              ))}
            </div>

            <img
              src={`http://localhost:5000/products/${product.images[selectedImage]}`}
              alt={product.title}
              className="single_product_display"
            />
          </div>

          <div className="single_product_details">
            <h1 className="single_product_title">{product.title}</h1>
            <p className="single_product_description">{product.description}</p>
            <p className="single_product_price">{product.price.toFixed(2)}</p>
            {userObj && (
              <>
                <h2 className="quantity_title">Quantity:</h2>
                <QuantityInput
                  quantity={quantity}
                  setQuantity={setQuantity}
                  stock={product.stock}
                />

                <button
                  className="search_button add_cart"
                  onClick={() => addToCart(product, quantity)}
                >
                  Add To Cart
                </button>
              </>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default SingleProductPage;
