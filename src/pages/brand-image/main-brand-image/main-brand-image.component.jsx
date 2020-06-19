import React, { useEffect } from 'react';
import { connect } from "react-redux";

import { history } from "../../../helpers";

import Modal from "../../../components/modal/modal.component";
import CustomButton from "../../../components/custom-button/custom-button.component";
import BrandDetails from "../../../components/brand-details/brand-details.component";

import { getOne } from "../../../redux/brand/brand.actions";
import { selectBrand } from "../../../redux/brand/brand.selectors";
import { selectBrandImageData } from "../../../redux/brand-images/brand-images.selectors";
import { setAsMain } from "../../../redux/brand-images/brand-images.actions";

const MainBrandImagePage = ({ brand, image, setAsMainImage, getBrandDetails }) => {
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
        if (brand) {
            const renderActions = () => {
                return (
                    <>
                        <CustomButton type="link" to={`/brands/show/${brand.id}`} variant="light">Cancel</CustomButton>
                        <CustomButton type="button"
                                      onClick={() => setAsMainImage(brand.id, image.id)}
                                      variant="dark">Set as Main Image</CustomButton>
                    </>
                );
            };

            return (
                <Modal
                    title={`Set as main image`}
                    content={`Are you sure you want to set ${image.alt} as main image?`}
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
    image: selectBrandImageData(ownProps.match.params.brandId, ownProps.match.params.mappingId)(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    getBrandDetails: () => dispatch(getOne(ownProps.match.params.brandId)),
    setAsMainImage: (brandId, imageId) => dispatch(setAsMain(brandId, imageId))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainBrandImagePage);