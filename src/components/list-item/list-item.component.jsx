import React from 'react';
import { LinkContainer } from "react-router-bootstrap";

import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import './list-item.styles.scss';

const ListItem = ({ item, to, actions, ...otherProps }) => {
    return (
        <LinkContainer to={to}>
            <ListGroup.Item action className="list-item">
                <Row>
                    <Col className="pt-1">
                        {item.name}
                    </Col>
                    <Col className="actions text-right">
                        {actions}
                    </Col>
                </Row>
            </ListGroup.Item>
        </LinkContainer>
    );
};

export default ListItem;
