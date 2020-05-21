import React from 'react';
import { Link } from "react-router-dom";

import './list-item.styles.scss';

const ListItem = ({ item }) => {
    return (
        <div className="list-item">
            {item.name}
            <div className="links">
                <div className="link blueviolet" onClick={() => console.log('test')}>move</div>
                <Link className="link blue" to={`brands/edit/${item.id}`}>edit</Link>
                <div className="link red remove-button" onClick={() => console.log('test')}>&#10005;</div>
            </div>
        </div>
    );
};

export default ListItem;
