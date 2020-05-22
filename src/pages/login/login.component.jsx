import React from 'react';

import LoginForm from "../../components/forms/login-form/login-form.component";

import './login.styles.scss';

const LoginPage = () => {
    return (
        <div className="login-page">
            <LoginForm />
        </div>
    );
};

export default LoginPage;
