import React from "react";
import "./Nav.css";
import { FaShopify } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {
 let items = useSelector(state=>state);

  return (
    <div className="nav">
      <div className="top-nav">
        <Link to='/' className="logo">
          <span>V-Shop</span>
          <FaShopify />
        </Link>
        <form className="search-box">
          <input type="text" placeholder="search for items..." />
          <button>
            <IoSearchOutline />
          </button>
        </form>
        <Link to='/card' className="cart-box">
          <FaShoppingCart />
          <span>{items.cart.length}</span>
        </Link>
      </div>
      <div className="bottom-nav">
        <ul className="menu-item">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/shop">
            <li>Shop</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/card">
            <li>Cart </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
