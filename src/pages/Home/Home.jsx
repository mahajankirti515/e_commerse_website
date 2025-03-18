import React, { useState } from "react";
import "./Home.css";
import bg from "../../assets/bg0.gif";
import { category } from "../../category";
import Product from "../../components/products/Product";
import { products } from "../../products";

export const Home = () => {
// state
const [cate, setCate] = useState(products)

// function defination
let filterProduct = (category) => {
    let updateFilterData = products.filter((item) => item.category === category)
    setCate(updateFilterData);
}


// return statement
  return (
    <>
      <div className="home">
        <div className="hero-img">
          <img src={bg} alt="" />
        </div>

        <div className="category-section">
          {category.slice(0, 5).map((item) => {
            return (
              <div className="category-card" 
                 onClick={() => {filterProduct(item.name)}}
                 key={item.id}>
                <img src={item.image} alt="" />
                <h3>{item.name}</h3>
              </div>
            );
          })}
        </div>

        <h1 className="heading">Treading Products</h1>
        <div className="product-section">
          {cate.slice(0,7).map((item) => {
            return (
              <Product
                key={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
                category={item.category}
                id={item.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
