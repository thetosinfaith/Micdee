import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faHouse, faSackDollar, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Locations from '../Locations/Locations';
import PropertyType from '../PropertyType/PropertyType';
import './Hero.css';

const Hero = () => {
  return (
    <main className='container'>
      <div className='content'>
        <h1 className='big-text'>Properties and Homes<br /> in Nigeria for Sale</h1>
        <p className='small-text'>No 1 real estate development company in Sub- Sahara Africa</p>

        <div className='booking-card'>
          <section className='items'>
            <FontAwesomeIcon icon={faLocationDot} className="icon" />
            <Locations/>
          </section>

          <section className='items'>
            <FontAwesomeIcon icon={faHouse} className="icon" />
            <PropertyType/>
          </section>

          <section className='items'>
            <FontAwesomeIcon icon={faSackDollar} className="icon" />
            <input type="number" placeholder='Your Budget' />
          </section>

          <button className='click'><FontAwesomeIcon icon={faMagnifyingGlass} /> Search</button>
        </div>
      </div>
    </main>
  );
};

export default Hero;
