import React from 'react'
import './ProductCard.css'
import star from "../../assets/white-star.png"
import basket from "../../assets/basket.png"
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import cartContext from '../../context/cartContext'
import config from '../../config.json'
import UserContext from '../../context/userContext'
const ProductCard = ({product}) => {
    const {addToCart} = useContext(cartContext);
    const userObj=useContext(UserContext)
  
    return (
  <article className='product_card'>
    <div className="product_image">
    <NavLink to={`/product/${product?._id}`}> <img src={`${config.baseURL}/products/${product?.images[0]}`} alt="" /></NavLink>
    </div>

    <div className="product_details">
        <h3 className='product_price'>${product?.price}</h3>
        <p className="product_title">{product?.title}</p>


        <footer className="align_center product_info_footer">
            <div className="align_center">
                <p className="align_center product_rating">
                   <img src={star} alt="" /> {product?.reviews.rate}
                </p>
                <p className="product_review_count">{product?.reviews.count}</p>
            </div>
            {
               product?.stock >0 &&
                <button className='add_to_cart' onClick={()=>addToCart(product,1)}>
                    { userObj &&
                        <img src={basket} alt="basket button" />
                    }
                
            </button>
            }
            
        </footer>
    </div>

  </article>
  )
}

export default ProductCard
