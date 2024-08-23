import React from 'react'
import { Outlet} from 'react-router-dom'
import './AccountTypeLayout.css'
import AgentAccount from '../../pages/AgentAccount/AgentAccount';
import IndividualAccount from '../../pages/IndividualAccount/IndividualAccount';
import LandlordAccount from '../../pages/LandlordAccount/LandlordAccount';
import DeveloperAccount from '../../pages/DeveloperAccount/DeveloperAccount';
import AccountLogo from '../../assets/redLogo.png'
import { Link } from 'react-router-dom';

const AccountTypeLayout = () => {
  return (
    <div className='account-contents'>
      <div className='mini-header'>
      <img src={AccountLogo} alt="Logo" className="image" />
      <p>Already have an account? <span className='account-span'><Link to="/auth/login">Log In</Link></span></p>
      </div>
      <h1>Choose an account type</h1>
      <p>We have different options to offer you based on your needs</p>
      
      <div className='account-layout'>
        <IndividualAccount />
        <LandlordAccount />
        <AgentAccount />
        <DeveloperAccount />
      </div>
      <Outlet />
    </div>
  )
}

export default AccountTypeLayout;
