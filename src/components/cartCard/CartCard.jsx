import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import "./CartCard.css";
import { useDispatch } from "react-redux";
import { RemoveItem } from "../../redux/cartSlice";


const CartCard = ({ name, id, price, image }) => {
  const dispatch = useDispatch();  

  return (
    <div className="cartCard">
      <div className="left-Cart">
        <img src={image} alt={name} />
        <div className="name-price">
          <span>{name}</span>
          <span>Rs {price} /-</span>
        </div>
      </div>

      <div className="rightCart">
        <button onClick={() => {dispatch(RemoveItem(id))}}>  
          Remove <RiDeleteBin6Fill />
        </button>
      </div>
    </div>
  );
};

export default CartCard;
