import React from 'react'
import './Header.css'
import Logo from '../../assets/range.png'
import Hamburger from "hamburger-react";
import { NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <nav className='header-container'>
            <section className='logo'>
                <img src={Logo} alt="" />
            </section>
            <section className='nav-links'>
                <NavLink to='/' style={({isActive}) => isActive ? {color: "#FF741A"} : {color: 'black'}}>Home</NavLink>
                <NavLink to='/Categories' style={({isActive}) => isActive ? {color: "#FF741A"} : {color: 'black'}}>Spaces</NavLink>
                <NavLink to='/post' style={({isActive}) => isActive ? {color: "#FF741A"} : {color: 'black'}}>Post </NavLink>
                <NavLink to='/booking' style={({isActive}) => isActive ? {color: "#FF741A"} : {color: 'black'}}>Blog</NavLink>
                <NavLink to='/booking' style={({isActive}) => isActive ? {color: "#FF741A"} : {color: 'black'}}>Our Locations</NavLink>
            </section>
            <section>
               <div className='reg-buttons'>
               <button className='signup'>Book a Space</button>
               </div>

               <div className='hamburger'>
                <Hamburger/>
               </div>
            </section>
        </nav>
    </header>

    
  )
}

export default Header 

