import React from 'react';

import './list-item.styles.scss';

const ListItem = ({ text, actions, ...otherProps }) => {
    return (
        <div className="list-item">
            {text}
            <div className="actions">
                {actions}
            </div>
        </div>
    );
};

export default ListItem;
