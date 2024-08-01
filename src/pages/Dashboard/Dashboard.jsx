import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { NavLink } from 'react-router-dom';
import { MdDashboard, MdNotificationsActive, MdDarkMode } from "react-icons/md";
import { TbMessage } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { FaSignOutAlt } from "react-icons/fa"; 
import { CiLocationOn } from "react-icons/ci";
import { IoIosSearch, IoIosPricetags, IoMdSettings } from "react-icons/io";
import { RiFilter3Line } from "react-icons/ri";
import Properties from '../Properties/Properties';




const Dashboard = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [name, setName] = useState('Tosin Faith');
  const [accountType, setAccountType] = useState('Landlord');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

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
            <li><NavLink to='/dashboard' activeClassName="active-link"><MdDashboard /> Dashboard</NavLink></li>
            <li><NavLink to='/dashboard/profile' activeClassName="active-link"><CgProfile /> Profile</NavLink></li>
            <li><NavLink to='/dashboard/inbox' activeClassName="active-link"><TbMessage /> Messages</NavLink></li>
            <li><NavLink to='/dashboard/notifications' activeClassName="active-link"><MdNotificationsActive /> Notifications</NavLink></li>
            <li><NavLink to='/dashboard/settings' activeClassName="active-link"><IoMdSettings /> Settings</NavLink></li>
            <li>
              <div className="dark-mode-toggle" style={{ gap: '10px', color: '#f0f0f0', marginTop: '20px'}}>
                <MdDarkMode style={{ color: '#999' }} /> Dark Mode
                <button onClick={toggleDarkMode} className="dark-mode-button">
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
        <div className={`features ${isOpen ? 'active' : ''}`}>
          <NavLink to='/' exact className="feature-link" activeClassName="active-link">Buy</NavLink>
          <NavLink to='/sell' className="feature-link" activeClassName="active-link">Sell</NavLink>
          <NavLink to='/rent' className="feature-link" activeClassName="active-link">Rent</NavLink>
          <NavLink to='/dashboard/post' className="feature-link" activeClassName="active-link">Post</NavLink>
        </div>

        <div className="dashboard-content">
          <div className="dashboard-inner-content">
            <div className="results-info">
            
              <div className="select-container">
                <div className='boxes-container'>
                  <div className="box">
                    <input type="text" placeholder="Search" className="search-input" />
                    <span className="price-icon"><IoIosSearch /></span>
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
                    <span className="price-icon"><CiLocationOn /></span>
                  </div>
                  <div className="box">
                    <input type="text" placeholder="Filter" className="filter-input" />
                    <span className="price-icon"><RiFilter3Line /></span>
                  </div>
                </div>
              </div>

              <div className='category-row'>
                <div className='children-categories'>
                <div className={`mini-children ${isOpen ? 'active' : ''}`}>
                <NavLink to='/' exact className="mini-feature-link" activeClassName="active-link"  style={({ isActive }) => isActive ? { color: "red" } : { color: 'red' }}>Recommended</NavLink>
                <NavLink to='/popular' className="mini-feature-link" activeClassName="active-link" style={({ isActive }) => isActive ? { color: "#ED3237" } : { color: 'black' }}>Popular</NavLink>
                <NavLink to='/latest' className="mini-feature-link" activeClassName="active-link" style={({ isActive }) => isActive ? { color: "#ED3237" } : { color: 'black' }}>Latest</NavLink>
                </div>
                </div>
              </div>
              <div className='properties-container'>
                <Properties/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
