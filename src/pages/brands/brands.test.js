import React from 'react';
import { shallow } from "enzyme";

import BrandsPage from "./brands.component";

it('should render BrandsPage component', () => {
    const mockMatch = {
        path: '/brands'
    };

    expect(shallow(<BrandsPage match={mockMatch} />)).toMatchSnapshot();
});