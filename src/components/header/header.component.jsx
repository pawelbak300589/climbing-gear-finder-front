import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import Octicon, { Dashboard, Person, SignIn, SignOut } from '@primer/octicons-react';
import { Link } from "react-router-dom";

import Navbar from "../navbar/navbar";

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
                    {
                        currentUser ?
                            <>
                                <Navbar currentUser={currentUser} />
                                <Link className="option" to="/profile"><Octicon icon={Person} /> Profile</Link>
                                <div className="option" onClick={logout}><Octicon icon={SignOut} /> Logout</div>
                            </>
                            :
                            <>
                                <Link className="option" to="/login"><Octicon icon={SignIn} /> Login</Link>
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
