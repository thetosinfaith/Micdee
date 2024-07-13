import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faHouse, faSackDollar, faCalendarDays, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './Hero.css';

const Hero = () => {
  return (
    <main className='container'>
      <div className='content'>
        <h1 className='big-text'>Property and Homes<br /> in Nigeria for Rent</h1>
        <p className='small-text'>Designed to foster creativity, networking & business growth</p>

        <div className='booking-card'>
          <section className='items'>
            <FontAwesomeIcon icon={faLocationDot} className="icon" />
            <select>
              <option>Pick Location</option>
              <option>Abia</option>
              <option>Adamawa</option>
              <option>Akwa Ibom</option>
              <option>Anambra</option>
              <option>Bauchi</option>
              <option>Bayelsa</option>
              <option>Benue</option>
              <option>Borno</option>
              <option>Cross River</option>
              <option>Delta</option>
              <option>Ebonyi</option>
              <option>Edo</option>
              <option>Ekiti</option>
              <option>Enugu</option>
              <option>Gombe</option>
              <option>Imo</option>
              <option>Jigawa</option>
              <option>Kaduna</option>
              <option>Kano</option>
              <option>Katsina</option>
              <option>Kebbi</option>
              <option>Kogi</option>
              <option>Kwara</option>
              <option>Lagos</option>
              <option>Nasarawa</option>
              <option>Niger</option>
              <option>Ogun</option>
              <option>Ondo</option>
              <option>Osun</option>
              <option>Oyo</option>
              <option>Plateau</option>
              <option>Rivers</option>
              <option>Sokoto</option>
              <option>Taraba</option>
              <option>Yobe</option>
              <option>Zamfara</option>
            </select>
          </section>

          <section className='items'>
            <FontAwesomeIcon icon={faHouse} className="icon" />
            <select>
              <option>Property Type</option>
              <option>Mini Flats</option>
              <option>Office Spaces</option>
              <option>Flats and Apartments</option>
              <option>Shop</option>
              <option>Semi Detached Bungalow</option>
              <option>Warehouse</option>
              <option>Co-working space</option>
              <option>Semi Detached Duplex</option>
              <option>Commercial Properties</option>
              <option>Houses</option>
              <option>Terraced Bungalow</option>
              <option>Self Contain</option>
              <option>Terraced Duplex</option>
              <option>Shop in a Mall</option>
              <option>Lands</option>
              <option>Detached Bungalow</option>
            </select>
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
