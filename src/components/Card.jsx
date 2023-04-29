import React from 'react';
import s from '../styles/card.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addItems } from '../redux/slices/cartSlice';
import { addItemsFavorites } from '../redux/slices/favoritesSlice';

const Card = ({ id, img, title, price, rate }) => {
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favorites.favoritesItems);
  const isFavorite = favorites.find((item) => item.id === id);

  const addItemToFavorites = () => {
    const item = {
      id,
      img,
      title,
      price,
      rate,
    };
    dispatch(addItemsFavorites(item));
  };

  const addItemToCart = () => {
    const item = {
      id,
      img,
      title,
      price,
      rate,
    };
    dispatch(addItems(item));
  };

  return (
    <div className={s.card}>
      <div className={s.cardImg}>
        <img src={img} alt="test" />
      </div>
      <div className={s.cardInfo}>
        <div className={s.namePrice}>
          <h4>{title}</h4>
          <p>{price} ₽</p>
        </div>
        <div className={s.ratingBuy}>
          <div className={s.rating}>
            <img src="./img/star.svg" alt="star" />
            <p>{rate}</p>
          </div>
          <div className={s.buy} onClick={addItemToCart}>
            <p>Купить</p>
          </div>
        </div>
      </div>
      {isFavorite ? (
        <img
          className={s.favoriteIcon}
          onClick={addItemToFavorites}
          src="./img/favoriteRed.svg"
          alt="favorites"
        />
      ) : (
        <img
          className={s.favoriteIcon}
          onClick={addItemToFavorites}
          src="./img/favorites.svg"
          alt="favorites"
        />
      )}
    </div>
  );
};

export default Card;
