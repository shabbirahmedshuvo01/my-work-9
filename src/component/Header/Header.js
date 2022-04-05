import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='work-head'>
            <div>
                <Link to={"/home"}>Home</Link>
                <Link to={"/review"}>Review</Link>
                <Link to={"/dashboard"}>Dashboard</Link>
                <Link to={"/blogs"}>Blogs</Link>
                <Link to={"/about"}>About</Link>
            </div>
        </nav>
    );
};

export default Header;