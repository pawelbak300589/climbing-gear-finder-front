import React from 'react';
import Octicon, { Dashboard } from "@primer/octicons-react";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

const NormalUserNav = () => {
    return <>
        <Nav className="mr-auto">
            <LinkContainer to="/dashboard"><Nav.Link><Octicon icon={Dashboard} /> Dashboard</Nav.Link></LinkContainer>
        </Nav>
    </>;
};

export default NormalUserNav;
