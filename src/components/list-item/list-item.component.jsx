import React from 'react';

import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import CustomButton from "../custom-button/custom-button.component";

import './list-item.styles.scss';

const ListItem = ({ item, to, actions, ...otherProps }) => {
    return (
        <ListGroup.Item className="list-item" {...otherProps}>
            <Row>
                <Col>
                    <CustomButton type="link"
                                  to={to}
                                  variant="link"
                                  size="sm"
                                  className="text-decoration-none">{item.name}</CustomButton>
                </Col>
                <Col className="actions text-right">
                    {actions}
                </Col>
            </Row>
        </ListGroup.Item>
    );
};

export default ListItem;
