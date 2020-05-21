import React from 'react';

import LoginForm from "../../components/forms/login-form/login-form.component";
import RegisterForm from "../../components/forms/register-form/register-form.component";

import './login-and-register.styles.scss';

const LoginAndRegisterPage = () => {
    return (
        <div className="login-and-register-page">
            <LoginForm />
            <RegisterForm />
        </div>
    );
};

export default LoginAndRegisterPage;
