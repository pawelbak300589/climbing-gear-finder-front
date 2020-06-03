import React from 'react';
import { LinkContainer } from "react-router-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const CustomBreadcrumb = ({ items }) => {
    return (
        <Container className="custom-breadcrumb pt-3">
            <Row>
                <Col>
                    <Breadcrumb>
                        {
                            items.map((item) => {
                                if (item.link !== '') {
                                    return <LinkContainer to={item.link} key={item.text}>
                                        <Breadcrumb.Item>{item.text}</Breadcrumb.Item>
                                    </LinkContainer>;
                                } else {
                                    return <Breadcrumb.Item key={item.text} active>{item.text}</Breadcrumb.Item>;
                                }
                            })
                        }
                    </Breadcrumb>
                </Col>
            </Row>
        </Container>
    );
};

export default CustomBreadcrumb;
