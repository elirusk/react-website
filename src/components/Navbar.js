import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Navbar.css';

const Navbar = () => {
  return ( 
    <nav className="navbar" bg='dark'>
    <ul className="navbar-ul">
    <li className="nav-link">
    <Link to="/">Home</Link>	
    </li>	
    <li className="nav-link">
    <Link to="/about">About</Link>
    </li>
    <li className="nav-link">
    <Link to="/criticism">Criticism</Link>
    </li>
    <li className="nav-link">
    <Link to="/code">Code</Link>
    </li>
    <li className="nav-link">
    <Link to="/blog">Blog</Link>
    </li>
    </ul>
    </nav>
  );
}


export default Navbar;
