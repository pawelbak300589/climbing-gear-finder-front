import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from "../form-input/form-input.component";
import CustomButton from "../../custom-button/custom-button.component";

import { register } from "../../../redux/auth/auth.actions";

import './register-form.styles.scss';

const RegisterForm = ({ registerStart }) => {
    const [userCredentials, setUserCredentials] = useState({
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const { userName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("password don't match");
            return;
        }

        registerStart({ name: userName, email, password, password_confirmation: confirmPassword });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setUserCredentials({ ...userCredentials, [name]: value });
    };

    return (
        <div className="register-form">
            <h2>Register</h2>
            <span>Register a new user</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    name="userName"
                    value={userName}
                    onChange={handleChange}
                    label="Your Name"
                    required
                />
                <FormInput
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    label="Your Email"
                    required
                />
                <FormInput
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    label="Password"
                    required
                />
                <FormInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                    label="Confirm Password"
                    required
                />
                <CustomButton type="submit" variant="dark">Register</CustomButton>
            </form>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    registerStart: (userRegisterCredentials) => dispatch(register(userRegisterCredentials))
});

export default connect(null, mapDispatchToProps)(RegisterForm);
