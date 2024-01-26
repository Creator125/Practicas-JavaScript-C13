import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/web-logo.svg"
import "./Sidebar.css"

export const Sidebar = () => {
  return (
    <div className='Sidebar'>
        <div className='logo'>
            <img src={logo} alt="logo" />
        </div>
        <nav>
            <ul>
                <li><Link to="/">Api</Link> </li>
                <li><Link to="/search">Search</Link></li>
                <li><Link to="/counter">Counter</Link></li>
            </ul>
        </nav>
    </div>
    
  );
};

export default Sidebar;
