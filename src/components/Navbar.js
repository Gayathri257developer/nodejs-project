import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Navbar.css'

const Navbar = () => {
  return (
    <>
    <h1> <span>The</span> Siren</h1>
    
    <div className='navbar'>
    <Link to="/home" className='link'>Home</Link>
    <Link to="/category/travel" className='link'>Tourism</Link>
    <Link to="/category/technology" className='link'>Technology</Link>
    <Link to="/category/bollywood" className='link'>Bollywood</Link>
    <Link to="/category/fitness" className='link'>Fitness</Link>
    <Link to="/category/food" className='link'>Food</Link>
    </div> 
    <hr className='hr-tag'/>
    </> 
    
  )
}

export default Navbar;