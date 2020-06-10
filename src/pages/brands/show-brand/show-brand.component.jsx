import React, { useEffect } from 'react';
import { connect } from "react-redux";

import BrandDetails from "../../../components/brand-details/brand-details.component";

import { getOne } from "../../../redux/brand/brand.actions";
import { selectBrand } from "../../../redux/brand/brand.selectors";

const ShowBrandPage = ({ brand, getBrandDetails }) => {
    useEffect(() => {
        if (brand === undefined) {
            getBrandDetails();
        }
    }, [brand, getBrandDetails]);

    const renderBrandDetails = () => {
        if (brand) {
            return (
                <BrandDetails brand={brand} />
            );
        }
    };

    return (
        <div className="show-brand-page">
            {renderBrandDetails()}
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    brand: selectBrand(ownProps.match.params.brandId)(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    getBrandDetails: () => dispatch(getOne(ownProps.match.params.brandId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowBrandPage);
