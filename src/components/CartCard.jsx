import React from 'react';
import s from '../styles/cartCard.module.scss';
import { useDispatch } from 'react-redux';
import { addItems, minusItems, removeItems } from '../redux/slices/cartSlice';

const CartCard = ({ id, img, title, price, count }) => {
  const dispatch = useDispatch();

  const removeItem = (id) => {
    dispatch(removeItems(id));
  };

  const onClickPlus = () => {
    dispatch(addItems({ id }));
  };

  const onClickMinus = () => {
    dispatch(minusItems(id));
  };

  return (
    <div className={s.cartCard}>
      <div className={s.imgTitle}>
        <div className={s.cartCardImg}>
          <img src={img} alt="headphone" />
        </div>
        <div className={s.cartCardInfo}>
          <h4>{title}</h4>
          <p>{price} ₽</p>
        </div>
        <div className={s.cartCardDelete} onClick={() => removeItem(id)}>
          <img src="./img/delete.svg" alt="delete" />
        </div>
      </div>

      <div className={s.cartCardPriceCount}>
        <div className={s.cartCardCount}>
          {count === 1 ? <button>-</button> : <button onClick={onClickMinus}>-</button>}
          <p>{count}</p>
          <button onClick={onClickPlus}>+</button>
        </div>
        <div className={s.cartCardPrice}>
          <p>{price * count}</p>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
