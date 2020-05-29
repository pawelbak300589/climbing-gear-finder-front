import React from 'react';
import { connect } from "react-redux";

import history from "../../../history";

import Modal from "../../../components/modal/modal.component";
import CustomButton from "../../../components/custom-button/custom-button.component";

import { selectBrand } from "../../../redux/brand/brand.selectors";
import { remove } from "../../../redux/brand/brand.actions";

const DeleteBrandPage = ({ brand, removeBrand }) => {

    const renderModal = () => {
        if (brand) {
            const renderActions = () => {
                return (
                    <>
                        <CustomButton type="link" to="/brands">Cancel</CustomButton>
                        <CustomButton onClick={() => removeBrand(brand.id)} colour="red">Delete</CustomButton>
                    </>
                );
            };

            return (
                <Modal
                    title={`Delete brand: ${brand.name}`}
                    content={`Are you sure you want to delete ${brand.name}?`}
                    actions={renderActions()}
                    onDismiss={() => history.push('/brands')}
                />
            );
        }
    };

    return (
        <div>
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
