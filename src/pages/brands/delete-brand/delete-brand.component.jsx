import React from 'react';
import { connect } from "react-redux";

import { history } from "../../../helpers";

import Modal from "../../../components/modal/modal.component";
import CustomButton from "../../../components/custom-button/custom-button.component";

import { selectBrand } from "../../../redux/brand/brand.selectors";
import { remove } from "../../../redux/brand/brand.actions";
import BrandDetails from "../../../components/brand-details/brand-details.component";

const DeleteBrandPage = ({ brand, removeBrand }) => {
    const renderBrandDetails = () => {
        if (brand) {
            return (
                <BrandDetails brand={brand} />
            );
        }
    };

    const renderModal = () => {
        if (brand) {
            const renderActions = () => {
                return (
                    <>
                        <CustomButton type="link" to={`/brands/show/${brand.id}`} variant="light">Cancel</CustomButton>
                        <CustomButton type="button" onClick={() => removeBrand(brand.id)} variant="danger">Delete</CustomButton>
                    </>
                );
            };

            return (
                <Modal
                    title={`Delete brand: ${brand.name}`}
                    content={`Are you sure you want to delete ${brand.name}?`}
                    actions={renderActions()}
                    onDismiss={() => history.push(`/brands/show/${brand.id}`)}
                />
            );
        }
    };

    return (
        <div>
            {renderBrandDetails()}
            {renderModal()}
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    brand: selectBrand(ownProps.match.params.brandId)(state)[0]
});

const mapDispatchToProps = dispatch => ({
    removeBrand: (brandId) => dispatch(remove(brandId))
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteBrandPage);
