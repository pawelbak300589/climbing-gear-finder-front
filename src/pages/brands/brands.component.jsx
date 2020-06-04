import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { Route } from 'react-router-dom';

import BrandsListContainer from "../../components/brands-list/brands-list.container";
import CreateBrandPage from "./create-brand/create-brand.component";
import EditBrandPageContainer from "./edit-brand/edit-brand.container";
import DeleteBrandPageContainer from "./delete-brand/delete-brand.container";
import ShowBrandPageContainer from "./show-brand/show-brand.container";
import BlacklistBrandPageContainer from "./blacklist-brand/blacklist-brand.container";

import { getAll } from "../../redux/brand/brand.actions";

const BrandsPage = ({ match, getAllBrands }) => {
    useEffect(() => {
        getAllBrands();
    }, [getAllBrands]);

    return (
        <div className="brands-page">
            <Route exact path={`${match.path}/`} component={BrandsListContainer} />
            <Route path={`${match.path}/create`} component={CreateBrandPage} />
            <Route path={`${match.path}/show/:brandId`} component={ShowBrandPageContainer} />
            <Route path={`${match.path}/edit/:brandId`} component={EditBrandPageContainer} />
            <Route path={`${match.path}/delete/:brandId`} component={DeleteBrandPageContainer} />
            <Route path={`${match.path}/blacklist/:brandId`} component={BlacklistBrandPageContainer} />
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    getAllBrands: () => dispatch(getAll())
});

export default connect(null, mapDispatchToProps)(BrandsPage);
