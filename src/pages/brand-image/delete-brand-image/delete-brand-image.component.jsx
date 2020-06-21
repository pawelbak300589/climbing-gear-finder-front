import React, { useEffect } from 'react';
import { connect } from "react-redux";

import { history } from "../../../helpers";

import Modal from "../../../components/modal/modal.component";
import CustomButton from "../../../components/custom-button/custom-button.component";
import BrandDetails from "../../../components/brand-details/brand-details.component";

import { getOne } from "../../../redux/brand/brand.actions";
import { selectBrand } from "../../../redux/brand/brand.selectors";
import { remove } from "../../../redux/brand-images/brand-images.actions";
import { selectBrandImageData } from "../../../redux/brand-images/brand-images.selectors";

const DeleteBrandImagePage = ({ brand, image, removeImage, getBrandDetails }) => {
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
        if (brand && image) {
            const renderActions = () => {
                return (
                    <>
                        <CustomButton type="link" to={`/brands/show/${brand.id}`} variant="light">Cancel</CustomButton>
                        <CustomButton type="button"
                                      onClick={() => removeImage(brand.id, image.id)}
                                      variant="danger">Delete</CustomButton>
                    </>
                );
            };

            return (
                <Modal
                    title={`Delete image: ${image.alt}`}
                    content={`Are you sure you want to delete ${image.alt} image?`}
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
    removeImage: (brandId, imageId) => dispatch(remove(brandId, imageId))
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteBrandImagePage);
