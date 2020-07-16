import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons/faSignInAlt';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons/faSignOutAlt';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons/faUserPlus';
import { faBell } from '@fortawesome/free-solid-svg-icons/faBell';

import CustomNavbar from "../navbar/custom-navbar";

import { selectCurrentUser } from "../../redux/auth/auth.selectors";

import { logout } from "../../redux/auth/auth.actions";

import './header.styles.scss';

const Header = ({ currentUser, logout }) => {
    return (
        <Navbar className="header" fixed="top" bg="light" variant="light">
            <LinkContainer to="/">
                <Navbar.Brand>
                    <img
                        alt=""
                        src="https://react-bootstrap.github.io/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    React Bootstrap
                </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                {
                    currentUser ?
                        <>
                            <CustomNavbar currentUser={currentUser} />
                            <Nav>
                                <NavDropdown alignRight
                                             title={<><FontAwesomeIcon icon={faBell} /></>}
                                             id="collasible-nav-dropdown">
                                    <LinkContainer to="/notifications">
                                        <Nav.Link> Show all</Nav.Link>
                                    </LinkContainer>
                                </NavDropdown>
                            </Nav>
                            <Nav>
                                <NavDropdown alignRight
                                             title={<><FontAwesomeIcon icon={faUser} /> {currentUser.name}</>}
                                             id="collasible-nav-dropdown">
                                    <LinkContainer to="/profile">
                                        <Nav.Link> Profile</Nav.Link>
                                    </LinkContainer>
                                    <NavDropdown.Divider />
                                    <Nav.Link onClick={logout}>
                                        <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                                    </Nav.Link>
                                </NavDropdown>
                            </Nav>
                        </>
                        :
                        <>
                            <Nav className="mr-auto">
                                <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
                                <LinkContainer to="/about"><Nav.Link>About</Nav.Link></LinkContainer>
                            </Nav>
                            <Nav>
                                <LinkContainer to="/login"><Nav.Link><FontAwesomeIcon icon={faSignInAlt} /> Login</Nav.Link></LinkContainer>
                                <LinkContainer to="/register"><Nav.Link><FontAwesomeIcon icon={faUserPlus} /> Register</Nav.Link></LinkContainer>
                            </Nav>
                        </>
                }
            </Navbar.Collapse>
        </Navbar>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
