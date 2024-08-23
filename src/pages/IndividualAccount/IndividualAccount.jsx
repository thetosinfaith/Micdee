import React from 'react'
import { IoCheckmark } from "react-icons/io5";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

import './IndividualAccount.css'

const IndividualAccount = () => {
  return (
    <div className='individual-container'>
        <h3>Individuals</h3>
        <p>For everyday users looking to buy, sell, or rent properties.</p>
        <ul>
            <li><IoCheckmark /> Easily find available houses</li>
            <li><IoCheckmark /> Contact landlords or agents directly</li>
            <li><IoCheckmark /> Buy lands & properties</li>
            <li><IoCheckmark /> Receive alerts about new properties</li>
        </ul>
        <Link to='/auth/signup' className='direction'>
            <BsArrowRightCircleFill />
        </Link>
    </div>
    
  )
}

export default IndividualAccount