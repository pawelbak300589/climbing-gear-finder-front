import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Break = () => {
    return (
        <Container className="break">
            <Row>
                <Col>
                    <hr className="my-2" />
                </Col>
            </Row>
        </Container>
    );
};

export default Break;
