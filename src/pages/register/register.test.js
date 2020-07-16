import React from 'react';
import { shallow } from "enzyme";

import RegisterPage from "./register.component";

it('should render RegisterPage component', () => {
    expect(shallow(<RegisterPage />)).toMatchSnapshot();
});