import React from 'react';
import { connect } from "react-redux";

import BrandDetails from "../../../components/brand-details/brand-details.component";
import CustomBreadcrumb from "../../../components/custom-breadcrumb/custom-breadcrumb.component";

import { showBrandPageBreadcrumbItems } from "../../../components/custom-breadcrumb/custom-breadcrumb.data";

import { selectBrand } from "../../../redux/brand/brand.selectors";

const ShowBrandPage = ({ brand }) => {
    const renderBrandDetails = () => {
        if (brand) {
            return (
                <BrandDetails brand={brand} />
            );
        }
    };

    return (
        <div className="show-brand-page">
            <CustomBreadcrumb items={showBrandPageBreadcrumbItems} />
            {renderBrandDetails()}
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    brand: selectBrand(ownProps.match.params.brandId)(state)[0]
});

export default connect(mapStateToProps)(ShowBrandPage);
