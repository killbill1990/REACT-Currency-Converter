import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {
  return (
    <nav className='NavBar'>
        <h1 className='Title'>Curency Converter</h1>
        <div className='Links'>
            <Link to="/Test"><a>Home</a></Link>
            <Link to="/Converter"><a>Converter</a></Link>
            <Link to="/Changes"><a>Changes</a></Link>
        </div>
    </nav>
  )
}

export default Navbar;
