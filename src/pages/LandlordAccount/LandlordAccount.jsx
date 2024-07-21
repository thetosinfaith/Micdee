import React from 'react';
import { IoCheckmark } from "react-icons/io5";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

import './LandlordAccount.css';

const LandlordAccount = () => {
  return (
    <div className='landlord-container'>
        <h3>For Landlords</h3>
        <p>For landlords managing land & rental properties.</p>
        <ul>
            <li><IoCheckmark /> Put your properties up for rent</li>
            <li><IoCheckmark /> Hire agents for your properties.</li>
            <li><IoCheckmark /> Find tenants</li>
            <li><IoCheckmark /> Receive quick payment</li>
        </ul>
        <Link to='/auth/signup' className='direction'>
            <BsArrowRightCircleFill />
        </Link>
    </div>
  );
}

export default LandlordAccount;
