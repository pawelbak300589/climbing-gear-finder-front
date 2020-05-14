import React from 'react';
import { Route } from 'react-router-dom';

import BrandsList from "../../components/brands-list/brands-list.component";
import CreateBrandPage from "./create-brand.component";
import EditBrandPage from "./edit-brand.component";

const BrandsPage = ({ match }) => {
    return (
        <div className="brands-page">
            <Route exact path={`${match.path}/`} component={BrandsList} />
            <Route path={`${match.path}/create`} component={CreateBrandPage} />
            <Route path={`${match.path}/edit/:brandId`} component={EditBrandPage} />
        </div>
    );
};

export default BrandsPage;
