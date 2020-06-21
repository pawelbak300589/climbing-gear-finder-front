import React from 'react';
import { connect } from 'react-redux';

import CustomBreadcrumb from "../../../components/custom-breadcrumb/custom-breadcrumb.component";
import CustomForm from "../../../components/forms/custom-form/custom-form.component";

import { createBrandPageBreadcrumbItems } from "../../../components/custom-breadcrumb/custom-breadcrumb.data";
import createBrandFormData from "../../../components/forms/create-brand-form.data";

import { create } from "../../../redux/brand/brand.actions";

import '../brands.styles.scss';

const CreateBrandPage = ({createBrand}) => {
    return (
        <div className="create-brand-page">
            <CustomBreadcrumb items={createBrandPageBreadcrumbItems} />
            <CustomForm data={createBrandFormData} onSubmit={(formData) => createBrand(formData)} />
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    createBrand: (formData) => dispatch(create(formData))
});

export default connect(null, mapDispatchToProps)(CreateBrandPage);