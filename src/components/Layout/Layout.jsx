import React from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Card from '../Card/Card';
import Lands from '../Lands/Lands';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import './Layout.css'; 
import Services from '../Services/Services';

const Layout = () => {
  return (
    <>
      <div className='bg-wrapper'>
        <Header />
        <Hero />
      </div>
      <div>
      <Card/>
      <Lands/>
      </div>

      <Outlet/>
      <Services/>
      <Footer />
    </>
  );
};

export default Layout;
