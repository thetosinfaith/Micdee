import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faHouse, faSackDollar, faCalendarDays, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Locations from '../Locations/Locations';
import PropertyType from '../PropertyType/PropertyType';
import './Hero.css';

const Hero = () => {
  return (
    <main className='container'>
      <div className='content'>
        <h1 className='big-text'>Properties and Homes<br /> in Nigeria for Sale</h1>
        <p className='small-text'>Designed to foster creativity, networking & business growth</p>

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

          <section className='items'>
            <FontAwesomeIcon icon={faCalendarDays} className="icon" />
            <input type="datetime-local" defaultValue="2024-07-12T23:20" />
          </section>

          <button className='click'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </div>
      </div>
    </main>
  );
};

export default Hero;
