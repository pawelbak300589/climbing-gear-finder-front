import React from 'react';

import CustomButton from "../custom-button/custom-button.component";

const ImageItemButtons = ({ brandId, id, main }) => {
    return (
        <div className="item-buttons">
            {
                !main && <CustomButton className="ml-2"
                                      type="link"
                                      variant="outline-dark"
                                      size="sm"
                                      to={`/brands/${brandId}/image/main/${id}`}>main</CustomButton>
            }
            <CustomButton className="ml-2"
                          type="link"
                          variant="outline-primary"
                          size="sm"
                          to={`/brands/${brandId}/image/edit/${id}`}>edit</CustomButton>
            <CustomButton className="ml-2"
                          type="link"
                          variant="outline-danger"
                          size="sm"
                          to={`/brands/${brandId}/image/delete/${id}`}>&#10005;</CustomButton>
        </div>
    );
};

export default ImageItemButtons;
