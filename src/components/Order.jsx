import React from 'react';
import s from '../styles/order.module.scss';
import { useSelector } from 'react-redux';

const Order = () => {
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <div className={s.order}>
      <div className={s.orderDown}>
        <h3>ИТОГО</h3>
        <p>₽ {totalPrice}</p>
        <div className={s.orderUp}>
          <h3>Перейти к оформлению</h3>
        </div>
      </div>
    </div>
  );
};

export default Order;
