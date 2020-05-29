import React from 'react';

import './brand-details.styles.scss';

const BrandDetails = ({ brand }) => {
    return (
        <div className="brand-details">
            <h1>{brand.name}</h1>
            <a href="{brand.url}">{brand.url}</a>
            {brand.created_at}
            {brand.modified_at}
            <hr />
            <div className="item-images"> {/*TODO: create component for this */}

                <img src="{brand.img}" alt="{brand.name}" />

            </div>
            <hr />
            <div className="mapping-list"> {/*TODO: create component for this */}
                <h4>Name Mappings:</h4>
                <ul>
                    {
                        brand.name_mappings.map((mapping) => {
                            return <li key={mapping.id}>{mapping.name}</li>;
                        })
                    }
                </ul>
            </div>
            <div className="mapping-create-form"> {/*TODO: create component for this */}
                <label>Create New Mapping</label>
                <input type="text" />
            </div>
        </div>
    );
};

export default BrandDetails;
