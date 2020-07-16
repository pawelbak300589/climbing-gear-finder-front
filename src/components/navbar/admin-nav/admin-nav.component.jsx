import React from 'react';
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { faUserCog } from "@fortawesome/free-solid-svg-icons/faUserCog";

const AdminNav = () => {
    return <>
        <Nav className="mr-auto">
            <LinkContainer to="/dashboard"><Nav.Link><FontAwesomeIcon icon={faTachometerAlt} /> Dashboard</Nav.Link></LinkContainer>
        </Nav>
        <Nav>
            <NavDropdown alignRight
                         title={<><FontAwesomeIcon icon={faUserCog} /> Admin</>}
                         id="collasible-nav-dropdown">
                <LinkContainer to="/users"><NavDropdown.Item>Users</NavDropdown.Item></LinkContainer>
            </NavDropdown>
        </Nav>
    </>;
};

export default AdminNav;
