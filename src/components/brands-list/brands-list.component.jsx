import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import ListItem from "../list-item/list-item.component";

import { selectBrandsList, selectBrandsTotal } from "../../redux/brand/brand.selectors";

import './brands-list.styles.scss';

const BrandsList = ({ brands, match, brandsTotal }) => {
    const itemActions = ({ id }) => (
        <>
            <Link className="action blue" to={`${match.path}edit/${id}`}>edit</Link>
            <div className="action blueviolet" onClick={() => console.log('test')}>move</div>
            <div className="action" onClick={() => console.log('blacklist')}>blacklist</div>
            <Link className="action red remove-button" to={`${match.path}delete/${id}`}>&#10005;</Link>
        </>
    );

    const itemText = ({ id, name }) => (
        <>
            <Link className="text-link" to={`${match.path}show/${id}`}>{name}</Link>
        </>
    );

    return (
        <div className="brands-list">
            <div className="list">
                <div className="list-header">
                    <h2>Brands</h2>

                    <div className="buttons">
                        <CustomButton type="link"
                                      variant="success"
                                      to={`${match.path}create`}>
                            Create New Brand
                        </CustomButton>
                    </div>
                </div>
                <p>Total brands: {brandsTotal}</p>
                {
                    brands.map(brand => (
                        <ListItem key={brand.id} text={itemText(brand)} actions={itemActions(brand)} />))
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
