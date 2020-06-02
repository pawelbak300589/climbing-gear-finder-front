import React from 'react';
import Octicon, { Dashboard, Settings } from "@primer/octicons-react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";

const AdminNav = () => {
    return <>
        <Nav className="mr-auto">
            <LinkContainer to="/dashboard"><Nav.Link><Octicon icon={Dashboard} /> Dashboard</Nav.Link></LinkContainer>
        </Nav>
        <Nav>
            <NavDropdown alignRight title={<><Octicon icon={Settings} /> Admin</>} id="collasible-nav-dropdown">
                <LinkContainer to="/users"><NavDropdown.Item>Users</NavDropdown.Item></LinkContainer>
            </NavDropdown>
        </Nav>
    </>;
};

export default AdminNav;
