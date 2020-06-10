import React, { useEffect } from 'react';
import { connect } from "react-redux";

import { history } from "../../../helpers";

import Modal from "../../../components/modal/modal.component";
import CustomButton from "../../../components/custom-button/custom-button.component";
import BrandDetails from "../../../components/brand-details/brand-details.component";
import EditMappingForm from "../../../components/forms/edit-mapping-form/edit-mapping-form.component";

import { getOne } from "../../../redux/brand/brand.actions";
import { selectBrand } from "../../../redux/brand/brand.selectors";
import { selectBrandMappingData } from "../../../redux/brand-mapping/brand-mapping.selectors";

const EditBrandMappingPage = ({ brand, mapping, getBrandDetails }) => {
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

    const renderModalContent = () => {
        if (brand && mapping) {
            return (
                <EditMappingForm brandId={brand.id} mapping={mapping} />
            );
        }
    };

    const renderModal = () => {
        if (brand) {
            const renderActions = () => {
                return (
                    <>
                        <CustomButton type="link" to={`/brands/show/${brand.id}`} variant="light">Cancel</CustomButton>
                    </>
                );
            };

            return (
                <Modal
                    title={`Edit brand mapping`}
                    content={renderModalContent()}
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
    brand: selectBrand(ownProps.match.params.brandId)(state),
    mapping: selectBrandMappingData(ownProps.match.params.brandId, ownProps.match.params.mappingId)(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    getBrandDetails: () => dispatch(getOne(ownProps.match.params.brandId))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditBrandMappingPage);