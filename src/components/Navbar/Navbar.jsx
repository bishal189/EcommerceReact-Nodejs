import React from "react";
import "./Navbar.css";
import rocket from "../../assets/rocket.png";
import star from "../../assets/glowing-star.png";
import idButton from "../../assets/id-button.png";
import memo from "../../assets/memo.png";
import order from "../../assets/package.png";
import lock from "../../assets/locked.png";
import LinkIcon from "./LinkIcon";
import { NavLink } from "react-router-dom";

const Navbar = ({ user }) => {
  return (
    <nav className="navbar align_center">
      <div className="align_center">
        <h1 className="navbar_heading">CartWish</h1>
        <form className="align_center  navbar_form" action="">
          <input type="text" className="navbar_search" placeholder="Search" />
          <button type="submit" className="search_button">
            Search
          </button>
        </form>
      </div>
      <div className="align_center navbar_links">
        <LinkIcon title="Home" link="/" emoji={rocket} />
        <LinkIcon title="Products" link="/products" emoji={star} />
        
        { !user && <>
          <LinkIcon title="Login" link="/login" emoji={idButton} />

        <LinkIcon title="Signup" link="/signup" emoji={memo} />
        </>}
        
        {user && (
          <>
            <LinkIcon title="My Orders" link="/myorders" emoji={order} />
            <LinkIcon title="Logout" link="/logout" emoji={lock} />

            <NavLink to={"/cart"} className="align_center">
              Cart <p className="align_center cart_counts">0</p>
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
