import React from 'react';
import {Link} from "react-router-dom";
const Navbar = () => {
    return (
        <div className="navbar">
            <h1 className="Zag">SpaceNews</h1>
            <div className="navbar__links">
                <Link className="nav" to="/About">О сайте</Link>
                <Link className="nav" to="/News">Новости</Link>
            </div>
        </div>
    );
};

export default Navbar;