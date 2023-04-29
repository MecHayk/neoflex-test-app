import React, { useState } from 'react';
import s from '../styles/footer.module.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [isLang, setIsLang] = useState(0);

  const lang = ['Рус', 'Eng'];

  return (
    <div className={s.footer}>
      <div className={s.logo}>
        <img src="./img/logo.svg" alt="logo" />
      </div>

      <div className={s.pages}>
        <Link to="/favorites">
          <p>Избранное</p>
        </Link>
        <Link to="/cart">
          <p>Корзина</p>
        </Link>

        <p>Контакты</p>
      </div>

      <div className={s.services}>
        <div className={s.conditions}>
          <p>Условия сервиса</p>
        </div>

        <div className={s.languages}>
          <img src="./img/globus.svg" alt="globus" />
          {lang.map((item, index) => (
            <p
              key={index}
              onClick={() => setIsLang(index)}
              className={isLang === index ? s.activeLang : ''}>
              {item}
            </p>
          ))}
        </div>
      </div>

      <div className={s.socNetworks}>
        <a href="https://vk.com/" target="blank">
          <img src="./img/vk.svg" alt="vk" />
        </a>
        <a href="https://web.telegram.org/k/" target="blank">
          <img src="./img/telegram.svg" alt="telegram" />
        </a>
        <a href="https://www.whatsapp.com/?lang=ru" target="blank">
          <img src="./img/whatsapp.svg" alt="whatsapp" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
