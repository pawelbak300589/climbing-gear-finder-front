import React from 'react';
import { shallow } from "enzyme";

import DashboardPage from "./dashboard.component";

it('should render DashboardPage component', () => {
    expect(shallow(<DashboardPage />)).toMatchSnapshot();
});