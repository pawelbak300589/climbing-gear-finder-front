import React from 'react';
import { Link } from "react-router-dom";

import './custom-button.styles.scss';

const CustomButton = ({ children, type = "button", colour = "black", ...otherProps }) => {
    let content;
    if (type === 'button' || type === 'submit') {
        content = <button className={`${colour} custom-button`} {...otherProps}>{children}</button>;
    } else if (type === 'link') {
        content = <Link className={`${colour} custom-button`} {...otherProps}>{children}</Link>;
    }

    return (
        <>{content}</>
    );
};

export default CustomButton;
