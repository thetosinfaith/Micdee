import React from 'react';
import { FaAngleRight } from "react-icons/fa6";
import { Ri24HoursLine} from "react-icons/ri";
import { TbThumbUp } from "react-icons/tb";
import { GrSecure } from "react-icons/gr";
import { MdOutlineNotificationsActive } from "react-icons/md";
import './Services.css';

const Services = () => {
  return (
    <div className='service-wrapper'>
      <div className='service-header'>
        <h1>At Our Core Is Trust</h1>
        <p>Trust is our currency. We are committed to the security of your <br />land, properties and the protection of your account.</p>
      </div>
      <div className='clicks'>
        <p>LEARN MORE <FaAngleRight /></p>
      </div>
      <div className='our-services'>
        <div className='service-item'>
          <div className='icon-circle'><Ri24HoursLine /></div>
          <h1>24hrs Support</h1>
          <p>At Micdee, we maintain high standards in all our dealings, regardless of the people, client, project size, scope or budget. </p>
        </div>
        <div className='service-item'>
          <div className='icon-circle'><TbThumbUp /></div>
          <h1>Quality</h1>
          <p>Our homes are a representation of love and community. We never compromise on delivering quality to all our customers.</p>
        </div>
        <div className='service-item'>
          <div className='icon-circle'><GrSecure /></div>
          <h1>Secure Housing</h1>
          <p>We are making access to a house better and easier for everyone. We are focused on the need to increase access to home ownership </p>
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
