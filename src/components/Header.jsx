import React from 'react';
import s from '../styles/header.module.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const favorites = useSelector((state) => state.favorites.favoritesItems);

  return (
    <div className={s.header}>
      <div className={s.headerLogo}>
        <Link to="/">
          <img src="./img/logo.svg" alt="logo" />
        </Link>
      </div>
      <div className={s.headerBar}>
        <Link to="/favorites">
          <div className={s.favoriteCount}>
            <span>{favorites.length}</span>
            <img src="./img/favorites.svg" alt="favorites" />
          </div>
        </Link>

        <Link to="/cart">
          <div className={s.cartCount}>
            <span>{cartItems.length}</span>
            <img src="./img/cart.svg" alt="cart" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
