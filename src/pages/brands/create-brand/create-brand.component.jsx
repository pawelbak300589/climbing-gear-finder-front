import React from 'react';

import CreateBrandForm from "../../../components/forms/create-brand-form/create-brand-form.component";
import CustomBreadcrumb from "../../../components/custom-breadcrumb/custom-breadcrumb.component";

import { createBrandPageBreadcrumbItems } from "../../../components/custom-breadcrumb/custom-breadcrumb.data";

import '../brands.styles.scss';

const CreateBrandPage = () => {
    return (
        <div className="create-brand-page">
            <CustomBreadcrumb items={createBrandPageBreadcrumbItems} />
            <CreateBrandForm />
        </div>
    );
};

export default CreateBrandPage;
