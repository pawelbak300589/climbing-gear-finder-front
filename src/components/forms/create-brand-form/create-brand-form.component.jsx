import React from 'react';
import { connect } from 'react-redux';

import CustomButton from "../../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

const CreateBrandForm = ( ) => {
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const handleChange = (event) => {
    //     const { value, name } = event.target;
    //
    //     // this.setState({ [name]: value });
    }

    return (
        <div className="create-brand-form">
            <h2>Create New Brand</h2>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name="name"
                    type="text"
                    label="Name"
                    value=""
                    handleChange={handleChange}
                    required
                />
                <FormInput
                    name="url"
                    type="text"
                    label="URL"
                    value=""
                    handleChange={handleChange}
                    required
                />
                <FormInput
                    name="img"
                    type="text"
                    label="Image"
                    value=""
                    handleChange={handleChange}
                    required
                />
                <div className="buttons">
                    <CustomButton type="submit" colour="green">Create</CustomButton>
                </div>
            </form>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    // createBrand: () => dispatch(createBrand())
});

export default connect(null, mapDispatchToProps)(CreateBrandForm);
