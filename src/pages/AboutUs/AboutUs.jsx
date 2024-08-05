import React from 'react';
import { FaAngleRight } from "react-icons/fa";
import { Ri24HoursLine } from "react-icons/ri";
import { TbThumbUp } from "react-icons/tb";
import { GrSecure } from "react-icons/gr";
import { MdOutlineNotificationsActive } from "react-icons/md";
import './AboutUs.css';

const Services = () => {
  return (
    <div className='service-wrapper'>
      <div className='service-header'>
        <h1>At Our Core Is Trust</h1>
        <h4 style={{ fontWeight: 'normal', marginTop: '20px', marginButton: '20px' }}>We are in the business of offering you investment opportunities that can help you grow your money.
        </h4>
      </div>
      <button className='clicks' style={{ backgroundColor: 'red', height: '5vh', border: 'none', color: 'white', cursor: 'pointer', width: '10%', borderRadius: '5px', marginBottom: '20px', marginTop: '10px'}}>
      LEARN MORE <FaAngleRight />
      </button>
      <div className='our-services'>
        <div className='service-item'>
          <div className='icon-circle'><Ri24HoursLine /></div>
          <h1>24hrs Support</h1>
          <p>At Micdee, we maintain high standards in all our dealings, regardless of the people, client, project size, scope or budget.</p>
        </div>
        <div className='service-item'>
          <div className='icon-circle'><TbThumbUp /></div>
          <h1>Quality</h1>
          <p>Our homes are a representation of love and community. We never compromise on delivering quality to all our customers.</p>
        </div>
        <div className='service-item'>
          <div className='icon-circle'><GrSecure /></div>
          <h1>Secure Housing</h1>
          <p>We are making access to a house better and easier for everyone. We are focused on the need to increase access to home ownership.</p>
        </div>
        <div className='service-item'>
          <div className='icon-circle'><MdOutlineNotificationsActive /></div>
          <h1>Reminders</h1>
          <p>We prioritize timely alerts and reminders to keep you informed about your property transactions and investment opportunities.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
