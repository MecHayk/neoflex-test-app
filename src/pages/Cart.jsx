import React from 'react';
import CartCard from '../components/CartCard';
import Order from '../components/Order';
import s from '../styles/cart.module.scss';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <div className={s.cartMain}>
      <h3>Корзина</h3>

      {cartItems.length === 0 ? (
        <div className={s.emptyCart}>
          <h2>Корзина пустая. Пожалуйста найдите то, что вам нужно в каталоге </h2>
          <img src="./img/emptyCart.svg" alt="Cart" />
        </div>
      ) : (
        <>
          <div className={s.cartWrapper}>
            <div className={s.cart}>
              {cartItems.map((items, index) => (
                <CartCard key={index} {...items} />
              ))}
            </div>
            <div>
              <Order />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
