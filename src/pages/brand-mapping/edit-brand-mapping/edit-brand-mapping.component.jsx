import React, { useEffect } from 'react';
import { connect } from "react-redux";

import { history } from "../../../helpers";

import Modal from "../../../components/modal/modal.component";
import CustomButton from "../../../components/custom-button/custom-button.component";
import BrandDetails from "../../../components/brand-details/brand-details.component";
import CustomForm from "../../../components/forms/custom-form/custom-form.component";

import { getOne } from "../../../redux/brand/brand.actions";
import { selectBrand } from "../../../redux/brand/brand.selectors";
import { update } from "../../../redux/brand-mapping/brand-mapping.actions";

import { selectBrandMappingData } from "../../../redux/brand-mapping/brand-mapping.selectors";
import editBrandMappingFormData from "../../../components/forms/edit-brand-mapping-form.data";

const EditBrandMappingPage = ({ brand, mapping, getBrandDetails, updateMapping }) => {
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
            const updatedFormData = {
                ...editBrandMappingFormData,
                initial: {
                    name: mapping.name,
                }
            };
            return <CustomForm data={updatedFormData} onSubmit={(formData) => updateMapping(brand.id, mapping.id, formData)} />;
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
    getBrandDetails: () => dispatch(getOne(ownProps.match.params.brandId)),
    updateMapping: (brandId, mappingId, formData) => dispatch(update(brandId, mappingId, formData))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditBrandMappingPage);