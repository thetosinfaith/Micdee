import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faHouse, faSackDollar, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Locations from '../Locations/Locations';
import PropertyType from '../PropertyType/PropertyType';
import './Hero.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import properties from '../../database/properties.json';

const Hero = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [budget, setBudget] = useState('');

  const searchDatabase = () => {
    const filteredProperties = properties.filter(property => {
      return (
        (location ? property.location === location : true) &&
        (propertyType ? property.type === propertyType : true) &&
        (budget ? property.price <= budget : true)
      );
    });
    navigate('/dashboard/properties', { state: { properties: filteredProperties } });
  };

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <main className='container'>
      <div className='content' data-aos="fade-right">
        <h1 className='big-text'>Only verified properties<br /> Dream it, we have it!</h1>
        <p className='small-text'>No 1 real estate development company in Sub-Sahara Africa</p>

        <div className='booking-card' data-aos="fade-down">
          <section className='items'>
            <FontAwesomeIcon icon={faLocationDot} className="icon" />
            <Locations onChange={e => setLocation(e.target.value)} />
          </section>

          <section className='items'>
            <FontAwesomeIcon icon={faHouse} className="icon" />
            <PropertyType onChange={e => setPropertyType(e.target.value)} />
          </section>

          <section className='items'>
            <FontAwesomeIcon icon={faSackDollar} className="icon" />
            <input
              type="number"
              placeholder='Your Budget'
              value={budget}
              onChange={e => setBudget(e.target.value)}
            />
          </section>

          <button className='click' onClick={searchDatabase}>
            <FontAwesomeIcon icon={faMagnifyingGlass} /> Search
          </button>
        </div>
      </div>
    </main>
  );
};

export default Hero;
