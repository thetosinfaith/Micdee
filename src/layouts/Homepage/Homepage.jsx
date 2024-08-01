import React from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';
import './Homepage.css'; 
import AboutUs from '../../pages/AboutUs/AboutUs';

const Layout = () => {
  return (
    <>
      <div className='bg-wrapper'>
        <Header />
        <Hero />
      </div>
      <div>
        <AboutUs/>
        <Card/>
      </div>
        <Footer />
    </>
  );
};

export default Layout;
