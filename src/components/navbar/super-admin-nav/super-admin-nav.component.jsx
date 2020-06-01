import React from 'react';
import { Link } from "react-router-dom";
import Octicon, { Dashboard } from "@primer/octicons-react";

const SuperAdminNav = () => {
    return <>
        <Link className="option" to="/dashboard"><Octicon icon={Dashboard} /> Dashboard</Link>
        <Link className="option" to="/users">Users</Link>
        <Link className="option" to="/brands">Brands</Link>
    </>;
};

export default SuperAdminNav;
