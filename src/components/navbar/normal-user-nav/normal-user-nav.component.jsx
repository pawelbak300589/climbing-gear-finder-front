import React from 'react';
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons'

const NormalUserNav = () => {
    return <>
        <Nav className="mr-auto">
            <LinkContainer to="/dashboard"><Nav.Link><FontAwesomeIcon icon={faTachometerAlt} /> Dashboard</Nav.Link></LinkContainer>
        </Nav>
    </>;
};

export default NormalUserNav;
