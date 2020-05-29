import React from 'react';

import CreateBrandForm from "../../../components/forms/create-brand-form/create-brand-form.component";

import '../brands.styles.scss';

const CreateBrandPage = () => {
    return (
        <div className="create-brand-page">
            <CreateBrandForm />
        </div>
    );
};

export default CreateBrandPage;
