import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CustomButton from "../custom-button/custom-button.component";
import ListItem from "../list-item/list-item.component";

import { selectBrandsList, selectBrandsTotal } from "../../redux/brand/brand.selectors";

import './brands-list.styles.scss';

const BrandsList = ({ brands, match, brandsTotal }) => {

    return (
        <div className="brands-list">
            <div className="list">
                <div className="list-header">
                    <h2>Brands</h2>

                    <div className="buttons">
                        <CustomButton type="link"
                                      colour="green"
                                      to={`${match.path}create`}>
                            Create New Brand
                        </CustomButton>
                    </div>
                </div>
                <p>Total brands: {brandsTotal}</p>
                {
                    brands.map(brand => (<ListItem key={brand.id} item={brand} />))
                }
            </div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    brands: selectBrandsList,
    brandsTotal: selectBrandsTotal,
});

export default connect(mapStateToProps)(BrandsList);
