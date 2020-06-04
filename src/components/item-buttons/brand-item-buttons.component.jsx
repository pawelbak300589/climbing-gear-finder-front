import React from 'react';

import CustomButton from "../custom-button/custom-button.component";

const BrandItemButtons = ({ id }) => {
    return (
        <div className="item-buttons">
            <CustomButton className="ml-2"
                          type="link"
                          variant="outline-primary"
                          size="sm"
                          to={`/brands/edit/${id}`}>edit</CustomButton>
            <CustomButton className="ml-2"
                          type="link"
                          variant="outline-info"
                          size="sm"
                          to={`/brands/move/${id}`}>move</CustomButton>
            <CustomButton className="ml-2"
                          type="link"
                          variant="outline-dark"
                          size="sm"
                          to={`/brands/blacklist/${id}`}>blacklist</CustomButton>
            <CustomButton className="ml-2"
                          type="link"
                          variant="outline-danger"
                          size="sm"
                          to={`/brands/delete/${id}`}>&#10005;</CustomButton>
        </div>
    );
};

export default BrandItemButtons;
