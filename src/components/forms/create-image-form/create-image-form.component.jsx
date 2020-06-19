import React, { useState } from 'react';
import { connect } from 'react-redux';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import CustomButton from "../../custom-button/custom-button.component";
import { create } from "../../../redux/brand-images/brand-images.actions";

const CreateImageForm = ({ brandId, createImage }) => {
    const [formData, setFormData] = useState({
        src: '',
    });

    const { src } = formData;

    const handleSubmit = (event) => {
        event.preventDefault();

        createImage(brandId, { src });
    };

    const handleChange = (event) => {
        const { value, name } = event.target;

        setFormData({ ...formData, [name]: value });
    };

    return (
        <Container className="create-image-form mt-2">
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <Form.Row className="align-items-center">
                            <Col xs="auto">
                                <Form.Label htmlFor="src">
                                    <h3>Images:</h3>
                                </Form.Label>
                            </Col>
                            <Col xs="auto">
                                <Form.Control
                                    id="src"
                                    className="mb-2"
                                    name="src"
                                    type="text"
                                    value={src}
                                    onChange={handleChange}
                                    placeholder="New image URL"
                                    required
                                />
                            </Col>
                            <Col xs="auto">
                                <CustomButton className="mb-2" type="submit" variant="success">
                                    Add new image
                                </CustomButton>
                            </Col>
                        </Form.Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

const mapDispatchToProps = dispatch => ({
    createImage: (brandId, formData) => dispatch(create(brandId, formData))
});

export default connect(null, mapDispatchToProps)(CreateImageForm);
