import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import CustomButton from "../../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import { update } from "../../../redux/brand/brand.actions";

import './edit-brand-form.styles.scss';

const EditBrandForm = ({ brand, updateBrand }) => {
    const [formData, setFormData] = useState({
        brandName: '',
        url: '',
        img: ''
    });

    useEffect(() => {
        if (brand) {
            setFormData({
                brandName: brand.name,
                url: brand.url,
                img: brand.img
            });
        }
    }, [brand]);


    const { brandName, url, img } = formData;

    const handleSubmit = (event) => {
        event.preventDefault();

        updateBrand(brand.id, { name: brandName, url, img });
    };

    const handleChange = (event) => {
        const { value, name } = event.target;

        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="edit-brand-form">
            <h2>Edit Brand</h2>

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
                    <CustomButton type="submit" variant="primary">Update brand</CustomButton>
                </div>
            </form>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    updateBrand: (id, formData) => dispatch(update(id, formData))
});

export default connect(null, mapDispatchToProps)(EditBrandForm);
