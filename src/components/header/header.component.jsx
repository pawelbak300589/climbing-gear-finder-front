import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

import { Link } from "react-router-dom";

import { selectCurrentUser } from "../../redux/auth/auth.selectors";

import { logout } from "../../redux/auth/auth.actions";

// import { ReactComponent as Logo } from "../../assets/logo.svg";

import './header.styles.scss';

const Header = ({ currentUser, logout }) => {
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
                    {
                        currentUser ?
                            <div className="option" onClick={logout}>Logout</div>
                            :
                            <>
                                <Link className="option" to="/login">Login</Link>
                                <Link className="option" to="/register">Register</Link>
                            </>
                    }
                </div>
            </nav>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
