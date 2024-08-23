import React from 'react'
import './Header.css'
import Logoo from '../../assets/logoo.png'
import Hamburger from "hamburger-react";
import { NavLink, Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <nav className='header-container'>
            <section className='logo'>
                <img src={Logoo} alt="" />
            </section>
            <section className='nav-links'>
                <NavLink to='/' style={({isActive}) => isActive ? {color: "#ED3237"} : {color: 'black'}}>Home</NavLink>
                <NavLink to='/Categories' style={({isActive}) => isActive ? {color: "#ED3237"} : {color: 'black'}}>About Us</NavLink>
                <NavLink to='/post' style={({isActive}) => isActive ? {color: "#ED3237"} : {color: 'black'}}>FAQs </NavLink>
                <NavLink to='/details' style={({isActive}) => isActive ? {color: "#ED3237"} : {color: 'black'}}>Blog</NavLink>
                <NavLink to='/workspaces' style={({isActive}) => isActive ? {color: "#ED3237"} : {color: 'black'}}>Contact Us</NavLink>
            </section>
            <section>
               <div className='reg-buttons'>
               <NavLink to='auth/login'><button className='login'>Login</button></NavLink>
               <NavLink to='choose-account'><button className='signup'>Sign Up For Free</button></NavLink>
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

