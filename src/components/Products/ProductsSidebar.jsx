import React from 'react'
import LinkIcon from '../Navbar/LinkIcon'
import './ProductsSidebar.css'
import rocket from "../../assets/rocket.png"

const ProductsSidebar = () => {
  return (
    <aside className='products_sidebar'>
       <h2>Category</h2>
       <div className="category_links">
        <LinkIcon title="Electronics" sidebar={true} link="products?category=electronics" emoji={rocket} />
        </div>
    </aside>
  )
}

export default ProductsSidebar
