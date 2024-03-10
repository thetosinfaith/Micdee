import React from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './Layout.css'; 

const Layout = () => {
  return (
    <>
      <div className='bg-wrapper'>
        <Header />
        <Hero />
      </div>
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
