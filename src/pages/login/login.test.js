import React from 'react';
import { shallow } from "enzyme";

import LoginPage from "./login.component";

it('should render LoginPage component', () => {
    expect(shallow(<LoginPage />)).toMatchSnapshot();
});