import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CustomButton from "../custom-button/custom-button.component";
import ListItem from "../list-item/list-item.component";

import { getAll } from "../../redux/brand/brand.actions";
import { selectBrandsList, selectIsLoading, selectBrandsTotal } from "../../redux/brand/brand.selectors";

import './brands-list.styles.scss';

const BrandsList = ({ brands, match, loading, brandsTotal, getAllBrands }) => {

    useEffect(() => {
        if (!brands) {
            getAllBrands();
        }
    }, [getAllBrands]);

    return (
        <div className="brands-list">
            <div className="list">
                <div className="list-header">
                    <h2>Brands</h2>
                    <CustomButton type="link" colour="green" style={{ marginLeft: "auto" }} to={`${match.path}create`}>
                        Create New Brand
                    </CustomButton>
                </div>
                <p>Total brands: {brandsTotal}</p>
                {
                    loading || !brands ?
                        <div>Loading...</div>
                        : brands.map(brand => (<ListItem key={brand.id} item={brand} />))
                }
            </div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    brands: selectBrandsList,
    loading: selectIsLoading,
    brandsTotal: selectBrandsTotal,
});

const mapDispatchToProps = dispatch => ({
    getAllBrands: () => dispatch(getAll())
});

export default connect(mapStateToProps, mapDispatchToProps)(BrandsList);
