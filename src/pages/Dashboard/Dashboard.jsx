import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import { MdDashboard, MdNotificationsActive, MdDarkMode } from "react-icons/md";
import { TbMessage } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { FaSignOutAlt } from "react-icons/fa"; 
import { CiLocationOn } from "react-icons/ci";
import { IoFilterSharp } from "react-icons/io5";
import { IoIosSearch, IoIosPricetags, IoMdSettings } from "react-icons/io";




const Dashboard = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [name, setName] = useState('Tosin Faith');
  const [accountType, setAccountType] = useState('Landlord');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const dashboard = document.querySelector('.right-dashboard-container');
    if (isDarkMode) {
      dashboard.classList.add('dark-mode');
      dashboard.classList.remove('light-mode');
    } else {
      dashboard.classList.add('light-mode');
      dashboard.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const buttonStyle = {
    backgroundColor: isDarkMode ? 'green' : 'red',
    color: 'white',
    padding: '5px 10px',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    marginLeft: '20px'
  }; 

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
            <li>
              <div className="dark-mode-toggle" style={{gap: '10px', color: '#333'}}>
                <MdDarkMode /> Dark Mode
                <button onClick={toggleDarkMode} style={buttonStyle}>
                  {isDarkMode ? 'ON' : 'OFF'}
                </button>
              </div>
            </li>
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

        <div className="dashboard-content">
          <div className="dashboard-inner-content">
            <div className="results-info">
              <h3>249 Results</h3>
            </div>

            <div className="select-container">
              <div className='boxes-container'>
              <div className="box">
                <input type="text" placeholder="Search" className="search-input" />
                <span className="price-icon"><IoIosSearch /></span>
                <i className="fa fa-search search-icon"></i>
              </div>
              <div className="box">
                <input type="text" placeholder="Price" className="price-input" />
                <span className="price-icon"><IoIosPricetags /></span>
              </div>
              <div className="box" style={{backgroundColor: '#ED3237', border: "none"}}>
                <select className="property-type-select" style={{color: "white"}}>
                  <option value="" disabled selected>Properties</option>
                  <option value="house" style={{color: "black"}}>House</option>
                  <option value="apartment" style={{color: "black"}}>Apartment</option>
                  <option value="condo" style={{color: "black"}}>Condo</option>
                </select>
              </div>
              <div className="box">
                <input type="text" placeholder="Location" className="location-input" />
                <span className="price-icon"><CiLocationOn/></span>
              </div>
              <div className="box">
                <input type="text" placeholder="Filter" className="filter-input" />
                <span className="price-icon"><IoFilterSharp /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Dashboard;
