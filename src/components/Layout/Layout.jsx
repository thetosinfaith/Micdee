import React from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';
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
        <Services/>
        <Card/>
      </div>
        <Footer />
    </>
  );
};

export default Layout;
