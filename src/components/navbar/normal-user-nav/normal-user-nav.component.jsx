import React from 'react';
import { Link } from "react-router-dom";
import Octicon, { Dashboard } from "@primer/octicons-react";

const NormalUserNav = () => {
    return <>
        <Link className="option" to="/dashboard"><Octicon icon={Dashboard} /> Dashboard</Link>
    </>;
};

export default NormalUserNav;
