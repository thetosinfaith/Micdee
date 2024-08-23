import React from 'react';
import { IoCheckmark } from "react-icons/io5";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

import './DeveloperAccount.css';

const DeveloperAccount = () => {
  return (
    <div className='developer-container'>
        <h3> Property Developers</h3>
        <p>For developers interested in property development projects.</p>
        <ul>
            <li><IoCheckmark /> Find development opportunities.</li>
            <li><IoCheckmark /> Connect with agents and landlords</li>
            <li><IoCheckmark /> Provide feedback on projects</li>
            <li><IoCheckmark /> Receive alert about new projects</li>
        </ul>
        <Link to='/auth/signup' className='direction'>
            <BsArrowRightCircleFill />
        </Link>
    </div>
  );
}

export default DeveloperAccount;
