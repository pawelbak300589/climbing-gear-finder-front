import React, { useState } from 'react';
import { connect } from 'react-redux';

import CustomButton from "../../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import { create } from "../../../redux/brand/brand.actions";

import './create-brand-form.styles.scss';

const CreateBrandForm = ({ createBrand }) => {
    const [formData, setFormData] = useState({
        brandName: '',
        url: '',
        img: ''
    });

    const { brandName, url, img } = formData;

    const handleSubmit = (event) => {
        event.preventDefault();

        createBrand({ name: brandName, url, img });
    };

    const handleChange = (event) => {
        const { value, name } = event.target;

        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="create-brand-form">
            <h2>Create New Brand</h2>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name="brandName"
                    type="text"
                    label="Name"
                    value={brandName}
                    handleChange={handleChange}
                    required
                />
                <FormInput
                    name="url"
                    type="text"
                    label="URL"
                    value={url}
                    handleChange={handleChange}
                    required
                />
                <FormInput
                    name="img"
                    type="text"
                    label="Image"
                    value={img}
                    handleChange={handleChange}
                    required
                />
                <div className="buttons">
                    <CustomButton type="submit" variant="success">Create new brand</CustomButton>
                </div>
            </form>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    createBrand: (formData) => dispatch(create(formData))
});

export default connect(null, mapDispatchToProps)(CreateBrandForm);
