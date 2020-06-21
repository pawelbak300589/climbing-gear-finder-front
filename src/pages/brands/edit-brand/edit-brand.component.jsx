import React, { useEffect } from 'react';
import { connect } from "react-redux";

import CustomBreadcrumb from "../../../components/custom-breadcrumb/custom-breadcrumb.component";
import CustomForm from "../../../components/forms/custom-form/custom-form.component";

import { selectBrand } from "../../../redux/brand/brand.selectors";

import { editBrandPageBreadcrumbItems } from "../../../components/custom-breadcrumb/custom-breadcrumb.data";
import editBrandFormData from "../../../components/forms/edit-brand-form.data";

import { getOne, update } from "../../../redux/brand/brand.actions";

const EditBrandPage = ({ brand, updateBrand, getBrandDetails }) => {
    useEffect(() => {
        if (brand === undefined) {
            getBrandDetails();
        }
    }, [brand, getBrandDetails]);

    const renderForm = () => {
        if (brand) {
            const updatedFormData = {
                ...editBrandFormData,
                initial: {
                    name: brand.name,
                    url: brand.url,
                }
            };
            return <CustomForm data={updatedFormData} onSubmit={(formData) => updateBrand(brand.id, formData)} />;
        }
    };

    return (
        <div className="edit-brand-page">
            <CustomBreadcrumb items={editBrandPageBreadcrumbItems} />
            {renderForm()}
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    brand: selectBrand(ownProps.match.params.brandId)(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    getBrandDetails: () => dispatch(getOne(ownProps.match.params.brandId)),
    updateBrand: (id, formData) => dispatch(update(id, formData))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditBrandPage);
