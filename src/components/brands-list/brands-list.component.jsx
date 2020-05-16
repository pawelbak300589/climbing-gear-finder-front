import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CustomButton from "../custom-button/custom-button.component";

import { selectBrandsList } from "../../redux/brand/brand.selectors";

import './brands-list.styles.scss';
import ListItem from "../list-item/list-item";

const BrandsList = ({ brands, match }) => {
    return (
        <div className="brands-list">
            <CustomButton type="link" colour="green" style={{ marginLeft: "auto" }} to={`${match.path}create`}>
                Create New Brand
            </CustomButton>
            <div className="list">
                {
                    brands.map(brand => (<ListItem key={brand.id} item={brand} />))
                }
            </div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    brands: selectBrandsList,
});

export default connect(mapStateToProps)(BrandsList);
