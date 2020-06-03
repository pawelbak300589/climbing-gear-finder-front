import React from 'react';
import Button from "react-bootstrap/Button";

import './custom-button.styles.scss';
import { LinkContainer } from "react-router-bootstrap";

const CustomButton = ({ children, ...otherProps }) => {
    let content;
    if (otherProps.type === 'button' || otherProps.type === 'submit') {
        content = <Button className="custom-button" {...otherProps}>{children}</Button>;
    } else if (otherProps.type === 'link') {
        const {to, ...buttonProps} = otherProps;
        content = <LinkContainer to={to}>
            <Button className="custom-button" {...buttonProps}>{children}</Button>
        </LinkContainer>;
    }

    return (
        <>{content}</>
    );
};

export default CustomButton;
