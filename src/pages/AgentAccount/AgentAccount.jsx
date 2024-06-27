import React from 'react';
import { IoCheckmark } from "react-icons/io5";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

import './AgentAccount.css';

const AgentAccount = () => {
  return (
    <div className='agent-container'>
        <h3> Agents & Developers</h3>
        <p>For agents facilitating property transactions.</p>
        <ul>
            <li><IoCheckmark /> Manage properties.</li>
            <li><IoCheckmark /> Meet developers & landlords</li>
            <li><IoCheckmark /> Provide client services</li>
            <li><IoCheckmark />Help buyers find a new home</li>
        </ul>
        <Link to='/auth/signup' className='direction'>
            <BsArrowRightCircleFill />
        </Link>
    </div>
  );
}

export default AgentAccount;
