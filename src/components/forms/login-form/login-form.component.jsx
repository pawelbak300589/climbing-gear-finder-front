import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from "../form-input/form-input.component";
import CustomButton from "../../custom-button/custom-button.component";

import { login } from "../../../redux/auth/auth.actions";

import './login-form.styles.scss';

const LoginForm = ({ login }) => {
    const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });

    const { email, password } = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();

        login({ email, password });
    };

    const handleChange = (event) => {
        const { value, name } = event.target;

        setUserCredentials({ ...userCredentials, [name]: value });
    };
    return (
        <div className="login-form">
            <h2>Login</h2>
            <span>Log in  with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name="email"
                    type="email"
                    label="Email"
                    value={email}
                    handleChange={handleChange}
                    required
                />
                <FormInput
                    name="password"
                    type="password"
                    label="Password"
                    value={password}
                    handleChange={handleChange}
                    required
                />

                <div className="buttons">
                    <CustomButton type="submit" variant="dark">Log in</CustomButton>
                </div>
            </form>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    login: (userLoginCredentials) => dispatch(login(userLoginCredentials))
});

export default connect(null, mapDispatchToProps)(LoginForm);
