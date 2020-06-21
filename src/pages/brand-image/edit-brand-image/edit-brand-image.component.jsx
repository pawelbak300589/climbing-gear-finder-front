import React, { useEffect } from 'react';
import { connect } from "react-redux";

import { history } from "../../../helpers";

import Modal from "../../../components/modal/modal.component";
import CustomButton from "../../../components/custom-button/custom-button.component";
import BrandDetails from "../../../components/brand-details/brand-details.component";
import CustomForm from "../../../components/forms/custom-form/custom-form.component";

import editBrandImageFormData from "../../../components/forms/edit-brand-image-form.data";

import { getOne } from "../../../redux/brand/brand.actions";
import { update } from "../../../redux/brand-images/brand-images.actions";
import { selectBrand } from "../../../redux/brand/brand.selectors";
import { selectBrandImageData } from "../../../redux/brand-images/brand-images.selectors";

const EditBrandImagePage = ({ brand, image, getBrandDetails, updateImage }) => {
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
        if (brand && image) {
            const updatedFormData = {
                ...editBrandImageFormData,
                initial: {
                    src: image.src,
                    alt: image.alt,
                }
            };
            return <CustomForm data={updatedFormData} onSubmit={(formData) => updateImage(brand.id, image.id, formData)} />;
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
                    title={`Edit brand image`}
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
    image: selectBrandImageData(ownProps.match.params.brandId, ownProps.match.params.imageId)(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    getBrandDetails: () => dispatch(getOne(ownProps.match.params.brandId)),
    updateImage: (brandId, imageId, formData) => dispatch(update(brandId, imageId, formData))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditBrandImagePage);