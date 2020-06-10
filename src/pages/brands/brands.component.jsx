import React  from 'react';
import { Route } from 'react-router-dom';

import BrandsOverviewPage from "./brands-overview/brands-overview.component";
import CreateBrandPage from "./create-brand/create-brand.component";
import EditBrandPageContainer from "./edit-brand/edit-brand.container";
import DeleteBrandPageContainer from "./delete-brand/delete-brand.container";
import ShowBrandPageContainer from "./show-brand/show-brand.container";
import BlacklistBrandPageContainer from "./blacklist-brand/blacklist-brand.container";
import ConvertBrandPageContainer from "./convert-brand/convert-brand.container";
import EditBrandMappingPageContainer from "../brand-mapping/edit-brand-mapping.container";

const BrandsPage = ({ match }) => {

    return (
        <div className="brands-page">
            <Route exact path={`${match.path}/`} component={BrandsOverviewPage} />
            <Route path={`${match.path}/create`} component={CreateBrandPage} />
            <Route path={`${match.path}/show/:brandId`} component={ShowBrandPageContainer} />
            <Route path={`${match.path}/edit/:brandId`} component={EditBrandPageContainer} />
            <Route path={`${match.path}/delete/:brandId`} component={DeleteBrandPageContainer} />
            <Route path={`${match.path}/blacklist/:brandId`} component={BlacklistBrandPageContainer} />
            <Route path={`${match.path}/convert/:brandId`} component={ConvertBrandPageContainer} />
            <Route path={`${match.path}/:brandId/mapping/edit/:mappingId`} component={EditBrandMappingPageContainer} />
            <Route path={`${match.path}/:brandId/mapping/delete/:mappingId`}
                   component={EditBrandMappingPageContainer} />
        </div>
    );
};

export default BrandsPage;
