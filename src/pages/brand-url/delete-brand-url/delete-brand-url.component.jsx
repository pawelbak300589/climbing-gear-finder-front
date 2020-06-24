import React, { useEffect } from 'react';
import { connect } from "react-redux";

import { history } from "../../../helpers";

import Modal from "../../../components/modal/modal.component";
import CustomButton from "../../../components/custom-button/custom-button.component";
import BrandDetails from "../../../components/brand-details/brand-details.component";

import { getOne } from "../../../redux/brand/brand.actions";
import { remove } from "../../../redux/brand-urls/brand-urls.actions";

import { selectBrand } from "../../../redux/brand/brand.selectors";
import { selectBrandUrlData } from "../../../redux/brand-urls/brand-urls.selectors";
import { selectWebsite } from "../../../redux/website/website.selectors";

const DeleteBrandUrlPage = ({ brand, url, website, removeUrl, getBrandDetails }) => {
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
        if (brand && url) {
            const renderActions = () => {
                return (
                    <>
                        <CustomButton type="link" to={`/brands/show/${brand.id}`} variant="light">Cancel</CustomButton>
                        <CustomButton type="button"
                                      onClick={() => removeUrl(brand.id, url.id)}
                                      variant="danger">Delete</CustomButton>
                    </>
                );
            };

            return (
                <Modal
                    title={`Delete url: ${website(url.website_id).name} website`}
                    content={`Are you sure you want to delete url for ${website(url.website_id).name} website?`}
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
    website: (websiteId) => selectWebsite(websiteId)(state),
    url: selectBrandUrlData(ownProps.match.params.brandId, ownProps.match.params.urlId)(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    getBrandDetails: () => dispatch(getOne(ownProps.match.params.brandId)),
    removeUrl: (brandId, urlId) => dispatch(remove(brandId, urlId))
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteBrandUrlPage);
