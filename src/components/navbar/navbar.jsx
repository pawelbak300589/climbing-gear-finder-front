import React from 'react';

import SuperAdminNav from "../navbar/super-admin-nav/super-admin-nav.component";
import AdminNav from "../navbar/admin-nav/admin-nav.component";
import NormalUserNav from "../navbar/normal-user-nav/normal-user-nav.component";
import PremiumUserNav from "../navbar/premium-user-nav/premium-user-nav.component";

const Navbar = ({ currentUser }) => {
    switch (currentUser.role) {
        case 'SuperAdmin':
            return <SuperAdminNav />;
        case 'Admin':
            return <AdminNav />;
        case 'NormalUser':
            return <NormalUserNav />;
        case 'PremiumUser':
            return <PremiumUserNav />;
        default:
            return <></>;
    }
};

export default Navbar;
