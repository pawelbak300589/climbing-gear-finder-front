import React from 'react';

import './list-item.styles.scss';

const ListItem = ({ item, actions, ...otherProps }) => {
    return (
        <div className="list-item">
            {item.name}
            <div className="actions">
                {actions}
            </div>
        </div>
    );
};

export default ListItem;
