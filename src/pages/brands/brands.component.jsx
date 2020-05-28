import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { Route } from 'react-router-dom';

import BrandsListContainer from "../../components/brands-list/brands-list.container";
import CreateBrandPage from "./create-brand.component";
import EditBrandPageContainer from "./edit-brands.container";
import DeleteBrandPageContainer from "./delete-brands.container";

import { getAll } from "../../redux/brand/brand.actions";

const BrandsPage = ({ match, getAllBrands }) => {
    useEffect(() => {
        getAllBrands();
    }, [getAllBrands]);

    return (
        <div className="brands-page">
            <Route exact path={`${match.path}/`} component={BrandsListContainer} />
            <Route path={`${match.path}/create`} component={CreateBrandPage} />
            <Route path={`${match.path}/edit/:brandId`} component={EditBrandPageContainer} />
            <Route path={`${match.path}/delete/:brandId`} component={DeleteBrandPageContainer} />
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    getAllBrands: () => dispatch(getAll())
});

export default connect(null, mapDispatchToProps)(BrandsPage);
