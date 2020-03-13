import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="Header">
            <div className="left">
                <h2>Users Information</h2>
            </div>
            <div className="right">
                <a href="/">Home</a>
                <a href="/profile">Profile</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </div>
        </div>
    );
};

export default Header;