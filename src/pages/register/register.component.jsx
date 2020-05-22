import React from 'react';

import RegisterForm from "../../components/forms/register-form/register-form.component";

import './register.styles.scss';

const RegisterPage = () => {
    return (
        <div className="register-page">
            <RegisterForm />
        </div>
    );
};

export default RegisterPage;
