import React from "react";
import "./Product.css";
import { useDispatch } from "react-redux";
import { AddItem } from "../../redux/cartSlice";


const Product = ({ name, image, price, category ,id}) => {
  
  let dispatch = useDispatch();

  return (
    <div className="product-card">
      <div className="product-img">
        <img src={image} alt="" />
      </div>
      <div className="product-details">
        <h3>{name}</h3>
        <h5>{category}/</h5>
        <h5>Rs {price}/</h5>
        <button onClick={()=> {
          dispatch(AddItem({name:name, image:image, price:price, id:id}))
        }}>ADD +</button>
      </div>
    </div>
  );
};

export default Product;
