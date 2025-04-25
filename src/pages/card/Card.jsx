import React from 'react';
import CartCard from '../../components/cartCard/CartCard';
import './Card.css';
import { useSelector } from 'react-redux';
import em from '../../assets/emptycart.png';

const Card = () => {

 let items = useSelector(state=>state);

 let totalPrice = items.cart.reduce((a,b) => a+b.price,0)
 
  return (
    <div className='card'>
      {
        items.cart.length <= 0 ? (
          <div className='empty-Cart'>
            <img src={em} alt="Empty Cart" />
            <h2>Empty Cart</h2>
          </div>
        ) : 
          <div className="cart-Section">
            {
              items.cart.map((item) => (
                <CartCard 
                name={item.name} 
                price={item.price} 
                image={item.image} 
                id={item.id} 
              />
              ))}
            
            <div className="price-section">
                <span>Total Product : {items.cart.length}</span>
                <span>Total Price : {totalPrice}</span>
            </div>
        
          </div>
      }
    </div>
  );
}

export default Card;
