import React from 'react';
import { Link } from "react-router-dom";

// import { ReactComponent as Logo } from "../../assets/logo.svg";

import './header.styles.scss';

const Header = () => {
    return (
        <div className="header">
            <nav className="main-nav">
                <Link className="logo-container" to="/">
                    LOGO
                    {/*<Logo className="logo" />*/}
                </Link>
                <div className="options">
                    <Link className="option" to="/brands">
                        Brands
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;
