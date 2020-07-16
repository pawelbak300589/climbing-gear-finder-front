import React from 'react';
import { shallow } from "enzyme";

import UsersPage from "./users.component";

it('should render UsersPage component', () => {
    expect(shallow(<UsersPage />)).toMatchSnapshot();
});