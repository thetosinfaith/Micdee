import React, { useState, useEffect } from 'react';
import './Dashboard.css'; 
import { NavLink } from 'react-router-dom';
import { MdDashboard, MdNotificationsActive, MdPostAdd } from 'react-icons/md';
import { TbMessage } from 'react-icons/tb';
import { CgProfile } from 'react-icons/cg';
import { FaSignOutAlt } from 'react-icons/fa';
import { CiLocationOn } from 'react-icons/ci';
import { IoIosSearch, IoIosPricetags, IoMdSettings } from 'react-icons/io';
import { RiFilter3Line } from 'react-icons/ri';
import Properties from '../Properties/Properties';
import { BsThreeDotsVertical } from 'react-icons/bs';
import 'leaflet/dist/leaflet.css';
import Hamburger from 'hamburger-react';
import { MdDashboard, MdNotificationsActive, MdPostAdd } from "react-icons/md";
import { TbMessage } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { FaSignOutAlt } from "react-icons/fa"; 
import { CiLocationOn } from "react-icons/ci";
import { IoIosSearch, IoIosPricetags, IoMdSettings } from "react-icons/io";
import { RiFilter3Line } from "react-icons/ri";
import Properties from '../Properties/Properties';
import { BsThreeDotsVertical } from "react-icons/bs";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


const Dashboard = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [name, setName] = useState('Tosin Faith');
  const [accountType, setAccountType] = useState('Landlord');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  const messages = [
    {
      id: 1,
      userImage: 'https://cowrywise.com/images/team/ebenezer.jpg',
      sender: 'Ebenezer Akintomide',
      content: 'Is the property in Ikeja still available?',
    },
    {
      id: 2,
      userImage: 'https://cowrywise.com/images/team/tolu.jpg',
      sender: 'Tolulope Alade',
      content: 'When can I view the land in Lagos?',
        id: 3,
        userImage: 'https://cowrywise.com/images/team/ebenezer.jpg',
        sender: 'Ebenezer Akintomide',
        content: 'Are there any rental properties in Calabar?',
    },
    {
        id: 4,
        userImage: 'https://cowrywise.com/images/team/tolu.jpg',
        sender: 'Tolulope Alade', 
        content: 'When can I view the land in Uyo?',
    },
  ];

  return (
    <div className='dashboard-container'>
      <div className="dashboard-hamburger-menu">
      </div>
      <div className={`left-dashboard ${isSidebarOpen ? <Hamburger/> : <Hamburger toggled={isSidebarOpen} toggle={setIsSidebarOpen} />}`}>
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
          <ul>
            <li><NavLink to='/dashboard' activeClassName="active-link"><MdDashboard /> Dashboard</NavLink></li>
            <li><NavLink to='/dashboard/profile' activeClassName="active-link"><CgProfile /> Profile</NavLink></li>
            <li><NavLink to='/dashboard/inbox' activeClassName="active-link"><TbMessage /> Messages</NavLink></li>
            <li><NavLink to='/dashboard/settings' activeClassName="active-link"><MdPostAdd /> Post</NavLink></li>
            <li><NavLink to='/dashboard/notifications' activeClassName="active-link"><MdNotificationsActive /> Notifications</NavLink></li>
            <li><NavLink to='/dashboard/settings' activeClassName="active-link"><IoMdSettings /> Settings</NavLink></li>
          </ul>

          <button className="logout-button">
            <FaSignOutAlt className="logout-icon" />
            Logout
          </button>
        </div>
      </div>
      <div className="right-dashboard-container">
      <div className="right-dashboard-container" style={{ marginTop: '-30px' }}>
        <div className="dashboard-content">
          <div className="dashboard-inner-content">
            <div className="results-info">
              <div className="select-container">
                <div className="scrollable-container">
                  <div className="boxes-container">
                    <div className="box sticky-box">
                      <input type="text" placeholder="Search" className="search-input" />
                      <span className="price-icon"><IoIosSearch /></span>
                    </div>
                    <div className="box sticky-box">
                      <input type="text" placeholder="Price" className="price-input" />
                      <span className="price-icon"><IoIosPricetags /></span>
                    </div>
                    <div className="box sticky-box" style={{ backgroundColor: '#ED3237', border: "none" }}>
                      <select className="property-type-select" style={{ color: "white" }}>
                        <option value="" disabled selected>Properties</option>
                        <option value="house" style={{ color: "black" }}>House</option>
                        <option value="apartment" style={{ color: "black" }}>Apartment</option>
                        <option value="condo" style={{ color: "black" }}>Condo</option>
                      </select>
                    </div>
                    <div className="box sticky-box">
                      <input type="text" placeholder="Location" className="location-input" />
                      <span className="price-icon"><CiLocationOn /></span>
                    </div>
                    <div className="box sticky-box">
                      <input type="text" placeholder="Filter" className="filter-input" />
                      <span className="price-icon"><RiFilter3Line /></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='category-row' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className='children-categories' style={{ marginTop: '10px' }}>
                  <div className={`mini-children ${isSidebarOpen ? 'active' : ''}`}>
                    <NavLink 
                      to='/' 
                      exact 
                      className="mini-feature-link" 
                      activeClassName="active-link" 
                      style={({ isActive }) => ({ color: isActive ? 'red' : 'red' })}
                    >
                      Recommended
                    </NavLink>
                    <NavLink 
                      to='/popular' 
                      className="mini-feature-link" 
                      activeClassName="active-link" 
                      style={({ isActive }) => ({ color: isActive ? '#ED3237' : 'black' })}
                    >
                      Popular
                    </NavLink>
                    <NavLink 
                      to='/latest' 
                      className="mini-feature-link" 
                      activeClassName="active-link" 
                      style={({ isActive }) => ({ color: isActive ? '#ED3237' : 'black' })}
                    >
                      Latest
                    </NavLink>
                  </div>
                </div>
                <div className="dark-mode-toggle">
                  <div 
                    className={`toggle-switch ${isDarkMode ? 'on' : 'off'}`} 
                    onClick={toggleDarkMode}
                  >
                    <div className="toggle-slider"></div>
                  </div>
                </div>
              </div>
              <div className='properties-container'>
                <Properties />
            <div className='children-categories' style={{ marginTop: '10px' }}>
            <div className={`mini-children ${isOpen ? 'active' : ''}`}>
              <NavLink 
                to='/' 
                exact 
                className="mini-feature-link" 
                activeClassName="active-link" 
                style={({ isActive }) => ({ color: isActive ? 'red' : 'red' })}
              >
                Recommended
              </NavLink>
              <NavLink 
                to='/popular' 
                className="mini-feature-link" 
                activeClassName="active-link" 
                style={({ isActive }) => ({ color: isActive ? '#ED3237' : 'black' })}
              >
                Popular
              </NavLink>
              <NavLink 
                to='/latest' 
                className="mini-feature-link" 
                activeClassName="active-link" 
                style={({ isActive }) => ({ color: isActive ? '#ED3237' : 'black' })}
              >
                Latest
              </NavLink>
            </div>
          </div>  
      <div className="dark-mode-toggle">
    <div 
      className={`toggle-switch ${isDarkMode ? 'on' : 'off'}`} 
      onClick={toggleDarkMode}
    >
      <div className="toggle-slider"></div>
     </div>
      </div>
          </div>
              <div className='properties-container'>
                <Properties/>

                <div className='dashboard-messages'>
                  <div className='header'>
                    <h3>Recent Messages</h3>
                    <BsThreeDotsVertical className='options-icon' />
                  </div>
                  <div className='messages'>
                    {messages.map(message => (
                      <div key={message.id} className='message'>
                        <img src={message.userImage} alt={`${message.sender}'s avatar`} className='user-image' />
                        <div className='message-content'>
                          <span className='sender'>{message.sender}</span>
                          <p>{message.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className='more-messages'>
                    <a href='#'>See more messages</a>
                  </div>
                </div>

                
                  <h3 className='map-vieww'>Map View</h3>
                  <MapContainer center={[9.082, 8.6753]} zoom={6} className='map-view'>
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {messages.map(message => (
                      message.location && Array.isArray(message.location) && message.location.length === 2 ? (
                        <Marker key={message.id} position={message.location}>
                          <Popup>
                            <div>
                              <strong>{message.sender}</strong><br />
                              {message.content}
                            </div>
                          </Popup>
                        </Marker>
                      ) : null
                    ))}
                  </MapContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
