import React, { useEffect } from 'react';
import { connect } from "react-redux";

import { history } from "../../../helpers";

import Modal from "../../../components/modal/modal.component";
import CustomButton from "../../../components/custom-button/custom-button.component";
import BrandDetails from "../../../components/brand-details/brand-details.component";
import CustomForm from "../../../components/forms/custom-form/custom-form.component";

import editBrandUrlFormData from "../../../components/forms/edit-brand-url-form.data";

import { getOne } from "../../../redux/brand/brand.actions";
import { update } from "../../../redux/brand-urls/brand-urls.actions";
import { selectBrand } from "../../../redux/brand/brand.selectors";
import { selectBrandUrlData } from "../../../redux/brand-urls/brand-urls.selectors";
import { selectWebsiteOptions } from "../../../redux/website/website.selectors";

const EditBrandUrlPage = ({ brand, url, websiteOptions, getBrandDetails, updateUrl }) => {
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
        if (brand && url) {
            const updatedFormData = {
                ...editBrandUrlFormData(websiteOptions),
                initial: {
                    website_id: url.website_id,
                    url: url.url,
                }
            };
            return <CustomForm data={updatedFormData} onSubmit={(formData) => updateUrl(brand.id, url.id, formData)} />;
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
                    title={`Edit brand url`}
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
    url: selectBrandUrlData(ownProps.match.params.brandId, ownProps.match.params.urlId)(state),
    websiteOptions: selectWebsiteOptions(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    getBrandDetails: () => dispatch(getOne(ownProps.match.params.brandId)),
    updateUrl: (brandId, urlId, formData) => dispatch(update(brandId, urlId, formData))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditBrandUrlPage);