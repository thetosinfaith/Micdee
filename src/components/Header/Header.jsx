import React from 'react'
import './Header.css'
import Logo from '../../assets/lg.png'
import Hamburger from "hamburger-react";
import { NavLink, Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <nav className='header-container'>
            <section className='logo'>
                <img src={Logo} alt="" />
            </section>
            <section className='nav-links'>
                <NavLink to='/' style={({isActive}) => isActive ? {color: "#ED3237"} : {color: 'black'}}>About</NavLink>
                <NavLink to='/Categories' style={({isActive}) => isActive ? {color: "#ED3237"} : {color: 'black'}}>Buy</NavLink>
                <NavLink to='/post' style={({isActive}) => isActive ? {color: "#ED3237"} : {color: 'black'}}>Rent </NavLink>
                <NavLink to='/details' style={({isActive}) => isActive ? {color: "#ED3237"} : {color: 'black'}}>Shortlet</NavLink>
                <NavLink to='/workspaces' style={({isActive}) => isActive ? {color: "#ED3237"} : {color: 'black'}}>Land</NavLink>
            </section>
            <section>
               <div className='reg-buttons'>
               <Link to='/post'>
               <button className='signup'>Post Property</button>
               </Link>
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

