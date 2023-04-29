import React from 'react';
import s from '../styles/app.module.scss';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div className={s.app}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
