import React, { useState } from "react";
import "./Shop.css";
import { category } from "../../category";
import { products } from "../../products";
import Product from "../../components/products/Product";
import { FaShopify } from "react-icons/fa";

const Shop = () => {
  // state
  const [cate, setCate] = useState(products);

  // function defination
  let filterProduct = (category) => {
    if (category === "ALL") {
      setCate(products);
    } else {
      let updateFilterData = products.filter(
        (item) => item.category === category
      );
      setCate(updateFilterData);
    }
  };

  return (
    <div className="shop-section">
      <div className="heading">
        <h1>Shop</h1>
         <FaShopify />
      </div>
      <div className="category-section">
        {category.map((item) => {
          return (
            <div
              className="category-card"
              onClick={() => {
                filterProduct(item.name);
              }}
              key={item.id}
            >
              <img src={item.image} alt="" />
              <h3>{item.name}</h3>
            </div>
          );
        })}
      </div>

      <div className="product-section">
        {cate.map((product) => {
          return (
            <Product
              key={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              category={product.category}
              id={product.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
