import React from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Card from '../Card/Card';
import Workspaces from '../../pages/Workspaces/Workspaces';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './Layout.css'; 
import Booking from '../../pages/Booking/Booking';

const Layout = () => {
  return (
    <>
      <div className='bg-wrapper'>
        <Header />
        <Hero />
      </div>
      <Card/>
      <Booking/>
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
