import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../components/Card';
import s from '../styles/favorites.module.scss';

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.favoritesItems);
  return (
    <>
      <h3>Избранное</h3>
      {favorites.length === 0 ? (
        <div className={s.emptyFav}>
          <h2>В избранных нет товаров. Найдите то, что вам нужно в каталоге</h2>
          <img src="./img/emptyFav.svg" alt="sad" />
        </div>
      ) : (
        <div className={s.favoritesWrapper}>
          {favorites.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      )}
    </>
  );
};

export default Favorites;
