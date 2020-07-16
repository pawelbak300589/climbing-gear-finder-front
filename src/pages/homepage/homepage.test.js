import React from 'react';
import { shallow } from "enzyme";

import HomePage from "./homepage.component";

it('should render HomePage component', () => {
    expect(shallow(<HomePage />)).toMatchSnapshot();
});