import React from 'react';
import { Link } from "react-router-dom";
import Octicon, { Dashboard } from "@primer/octicons-react";

const AdminNav = () => {
    return <>
        <Link className="option" to="/dashboard"><Octicon icon={Dashboard} /> Dashboard</Link>
        <Link className="option" to="/users">Users</Link>
    </>;
};

export default AdminNav;
