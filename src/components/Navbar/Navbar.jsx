import React from "react";
import "./Navbar.css";
import rocket from "../../assets/rocket.png";
import star from "../../assets/glowing-star.png";
import idButton from "../../assets/id-button.png";
import memo from "../../assets/memo.png";
import order from "../../assets/package.png";
import lock from "../../assets/locked.png";
import LinkIcon from "./LinkIcon";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../context/userContext";
import cartContext from "../../context/cartContext";
import { useState, useEffect } from "react";
import { getSuggestionsAPI } from "../../Services/productServices";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = useContext(UserContext);
  const [suggestions, setSuggestion] = useState([]);
  const [search, setSearch] = useState("");

  const { cart } = useContext(cartContext);
  const navigate = useNavigate();

  //handling submit

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      navigate(`/products?search=${search.trim()}`);
    }
    setSuggestion([]);
  };

  useEffect(() => {
    if (search.trim() !== "") {
      getSuggestionsAPI(search)
        .then((res) => {
          setSuggestion(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setSuggestion([]);
    }
  }, [search]);

  return (
    <nav className="navbar align_center">
      <div className="align_center">
        <h1 className="navbar_heading">CartWish</h1>
        <form
          className="align_center  navbar_form"
          action=""
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="navbar_search"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" className="search_button">
            Search
          </button>
          {suggestions.length > 0 && (
            <ul className="search_result">
              {suggestions.map((suggestion) => (
                <li className="search_suggestion_link" key={suggestion._id}>
                  <Link
                    to={`/products?search=${suggestion.title}`}
                    onClick={() => {
                      setSearch("");
                      setSuggestion([]);
                    }}
                  >
                    {suggestion.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </form>
      </div>
      <div className="align_center navbar_links">
        <LinkIcon title="Home" link="/" emoji={rocket} />
        <LinkIcon title="Products" link="/products" emoji={star} />

        {!user && (
          <>
            <LinkIcon title="Login" link="/login" emoji={idButton} />

            <LinkIcon title="Signup" link="/signup" emoji={memo} />
          </>
        )}

        {user && (
          <>
            <LinkIcon title="My Orders" link="/myorders" emoji={order} />
            <LinkIcon title="Logout" link="/logout" emoji={lock} />

            <NavLink to={"/cart"} className="align_center">
              Cart <p className="align_center cart_counts">{cart.length}</p>
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
