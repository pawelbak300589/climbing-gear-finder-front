import React, { useState } from 'react';

import FormInput from "../form-input/form-input.component";
import CustomButton from "../../custom-button/custom-button.component";

import './register-form.styles.scss';

const RegisterForm = () => {
    const [userCredentials, setUserCredentials] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const { name, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("password don't match");
            return;
        }

        // signUpStart({ email, password, name });
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
                    name="name"
                    value={name}
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
                <CustomButton type="submit">Register</CustomButton>
            </form>
        </div>
    );
};

export default RegisterForm;
