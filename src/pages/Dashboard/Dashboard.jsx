import React, { useState } from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import { MdDashboard, MdNotificationsActive, MdDarkMode } from "react-icons/md";
import { TbMessage } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaSignOutAlt } from "react-icons/fa"; 

const Dashboard = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [name, setName] = useState('Tosin Faith');
  const [accountType, setAccountType] = useState('Landlord');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='dashboard-container'>
      <div className='left-dashboard'>
        <div className="profile-section">
          <label className="profile-pic-container">
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            <img 
              src={profilePic || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMcL4AEbLTIBKLFW09-AXSjpXEPXAVBHF5Qw&s'} 
              alt="Profile"
              className="profile-pic" 
            />
          </label>
          <div className="profile-info">
            <p className="profile-name">{name}</p>
            <p className="profile-account-type">{accountType}</p>
          </div>
        </div>

        <div className="dashboard-contain">
          <form className="dashboard-form">
            <input type="text" placeholder="Search Property..." />
          </form>

          <ul>
            <li><Link to='/dashboard'><MdDashboard /> Dashboard</Link></li>
            <li><Link to='/profile'><CgProfile /> Profile</Link></li>
            <li><Link to='/inbox'><TbMessage /> Messages</Link></li>
            <li><Link to='/notifications'><MdNotificationsActive /> Notifications</Link></li>
            <li><Link to='/settings'><IoMdSettings /> Settings</Link></li>
            <li><Link to='/dark-mode'><MdDarkMode /> Dark Mode</Link></li>
          </ul>

          <button className="logout-button">
            <FaSignOutAlt className="logout-icon" />
            Logout
          </button>
        </div>
      </div>
      
      <div className="right-dashboard-container">
      <div className='features'>
      <h2>Buy</h2>
      <h2>Sell</h2>
      <h2>Rent</h2>
      <h2>Post</h2>
      </div>

      <div className='dashboard-content'>
        <div className='dashboard-inner-content'>
          <h3>249 Results</h3> <p>in Lagos, Nigeria</p>

        </div>
        

      </div>

      
      </div>
    </div>
  );
}

export default Dashboard;
