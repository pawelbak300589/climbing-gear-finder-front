import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import Octicon, { Person, SignIn, SignOut, Bell } from '@primer/octicons-react';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

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
                                             title={<><Octicon icon={Bell} /></>}
                                             id="collasible-nav-dropdown">
                                    <LinkContainer to="/notifications">
                                        <Nav.Link> Show all</Nav.Link>
                                    </LinkContainer>
                                </NavDropdown>
                            </Nav>
                            <Nav>
                                <NavDropdown alignRight
                                             title={<><Octicon icon={Person} /> {currentUser.name}</>}
                                             id="collasible-nav-dropdown">
                                    <LinkContainer to="/profile">
                                        <Nav.Link> Profile</Nav.Link>
                                    </LinkContainer>
                                    <NavDropdown.Divider />
                                    <Nav.Link onClick={logout}>
                                        <Octicon icon={SignOut} /> Logout
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
                                <LinkContainer to="/login"><Nav.Link><Octicon icon={SignIn} /> Login</Nav.Link></LinkContainer>
                                <LinkContainer to="/register"><Nav.Link>Register</Nav.Link></LinkContainer>
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
