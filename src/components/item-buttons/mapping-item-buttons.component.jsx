import React from 'react';

import CustomButton from "../custom-button/custom-button.component";

const MappingItemButtons = ({ brandId, id }) => {
    return (
        <div className="item-buttons">
            <CustomButton className="ml-2"
                          type="link"
                          variant="outline-primary"
                          size="sm"
                          to={`/brands/${brandId}/mapping/edit/${id}`}>edit</CustomButton>
            <CustomButton className="ml-2"
                          type="link"
                          variant="outline-danger"
                          size="sm"
                          to={`/brands/${brandId}/mapping/delete/${id}`}>&#10005;</CustomButton>
        </div>
    );
};

export default MappingItemButtons;
