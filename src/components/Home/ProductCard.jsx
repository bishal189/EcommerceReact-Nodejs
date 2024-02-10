import React from 'react'
import './ProductCard.css'
import iphone from "../../assets/iphone.jpg"
import star from "../../assets/white-star.png"
import basket from "../../assets/basket.png"
import { NavLink } from 'react-router-dom'
const ProductCard = ({id,price,title,images,stock,rating,ratingCounts}) => {
  
    return (
  <article className='product_card'>
    <div className="product_image">
    <NavLink to={`/product/${id}`}> <img src={`http://localhost:5000/products/${images}`} alt="" /></NavLink>
    </div>

    <div className="product_details">
        <h3 className='product_price'>${price}</h3>
        <p className="product_title">{title}</p>


        <footer className="align_center product_info_footer">
            <div className="align_center">
                <p className="align_center product_rating">
                   <img src={star} alt="" /> {rating}
                </p>
                <p className="product_review_count">{ratingCounts}</p>
            </div>
            {
                stock >0 &&
                <button className='add_to_cart'>
                <img src={basket} alt="basket button" />
            </button>
            }
            
        </footer>
    </div>

  </article>
  )
}

export default ProductCard
