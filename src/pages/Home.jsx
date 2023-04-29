import React, { useEffect } from 'react';
import Card from '../components/Card';
import s from '../styles/home.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHeadphones, fetchWireless } from '../redux/slices/productsSlice';

const Home = () => {
  const { headphones, wireles } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHeadphones());
    dispatch(fetchWireless());
  }, []);

  return (
    <div className={s.home}>
      <h3>Наушники</h3>
      <div className={s.cardWrapper}>
        {headphones.items.map((obj, index) => (
          <Card key={index} {...obj} />
        ))}
      </div>
      <h3>Беспроводные наушники</h3>
      <div className={s.cardWrapper}>
        {wireles.items.map((obj, index) => (
          <Card key={index} {...obj} />
        ))}
      </div>
    </div>
  );
};

export default Home;
