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
                <NavLink to='/' style={({isActive}) => isActive ? {color: "#ED3237"} : {color: 'black'}}>About</NavLink>
                <NavLink to='/Categories' style={({isActive}) => isActive ? {color: "#ED3237"} : {color: 'black'}}>Buy Land</NavLink>
                <NavLink to='/post' style={({isActive}) => isActive ? {color: "#ED3237"} : {color: 'black'}}>Rent </NavLink>
                <NavLink to='/details' style={({isActive}) => isActive ? {color: "#ED3237"} : {color: 'black'}}>Shortlet</NavLink>
                <NavLink to='/workspaces' style={({isActive}) => isActive ? {color: "#ED3237"} : {color: 'black'}}>Post Property</NavLink>
            </section>
            <section>
               <div className='reg-buttons'>
               <NavLink to='/auth/login'><button className='login'>Login</button></NavLink>
               <NavLink to='/auth/signup'><button className='signup'>Signup</button></NavLink>
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

