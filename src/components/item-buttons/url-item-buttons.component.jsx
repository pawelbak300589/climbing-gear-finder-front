import React from 'react';

import CustomButton from "../custom-button/custom-button.component";

const UrlItemButtons = ({ brandId, id, main }) => {
    return (
        <div className="item-buttons">
            {
                !main && <CustomButton className="ml-2"
                                      type="link"
                                      variant="outline-dark"
                                      size="sm"
                                      to={`/brands/${brandId}/url/main/${id}`}>main</CustomButton>
            }
            <CustomButton className="ml-2"
                          type="link"
                          variant="outline-primary"
                          size="sm"
                          to={`/brands/${brandId}/url/edit/${id}`}>edit</CustomButton>
            <CustomButton className="ml-2"
                          type="link"
                          variant="outline-danger"
                          size="sm"
                          to={`/brands/${brandId}/url/delete/${id}`}>&#10005;</CustomButton>
        </div>
    );
};

export default UrlItemButtons;
