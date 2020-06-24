import React from 'react';

import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import CustomButton from "../custom-button/custom-button.component";

import './list-item.styles.scss';

const ListItem = ({ mainText, to, actions, ...otherProps }) => {
    return (
        <ListGroup.Item className="list-item" {...otherProps}>
            <Row>
                <Col>
                    {
                        to ?
                            <CustomButton type="link"
                                          to={to}
                                          variant="link"
                                          size="sm"
                                          className="text-decoration-none">{mainText}</CustomButton>

                            :
                            mainText
                    }
                </Col>
                <Col md lg="auto" className="actions text-right">
                    {actions}
                </Col>
            </Row>
        </ListGroup.Item>
    );
};

export default ListItem;
