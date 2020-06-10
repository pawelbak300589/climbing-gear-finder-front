import React, { useEffect } from 'react';
import { connect } from "react-redux";

import { history } from "../../../helpers";

import Modal from "../../../components/modal/modal.component";
import CustomButton from "../../../components/custom-button/custom-button.component";
import BrandDetails from "../../../components/brand-details/brand-details.component";

import { getOne } from "../../../redux/brand/brand.actions";
import { selectBrand } from "../../../redux/brand/brand.selectors";
import { remove } from "../../../redux/brand-mapping/brand-mapping.actions";
import { selectBrandMappingData } from "../../../redux/brand-mapping/brand-mapping.selectors";

const DeleteBrandMappingPage = ({ brand, mapping, removeMapping, getBrandDetails }) => {
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

    const renderModal = () => {
        if (brand && mapping) {
            const renderActions = () => {
                return (
                    <>
                        <CustomButton type="link" to={`/brands/show/${brand.id}`} variant="light">Cancel</CustomButton>
                        <CustomButton type="button"
                                      onClick={() => removeMapping(brand.id, mapping.id)}
                                      variant="danger">Delete</CustomButton>
                    </>
                );
            };

            return (
                <Modal
                    title={`Delete mapping: ${mapping.name}`}
                    content={`Are you sure you want to delete ${mapping.name}?`}
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
    removeMapping: (brandId, mappingId) => dispatch(remove(brandId, mappingId))
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteBrandMappingPage);
