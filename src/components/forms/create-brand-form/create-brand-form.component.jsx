import React, { useState } from 'react';
import { connect } from 'react-redux';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import CustomButton from "../../custom-button/custom-button.component";

import { create } from "../../../redux/brand/brand.actions";

import './create-brand-form.styles.scss';

const CreateBrandForm = ({ createBrand }) => {
    const [formData, setFormData] = useState({
        brandName: '',
        url: '',
    });

    const { brandName, url } = formData;

    const handleSubmit = (event) => {
        event.preventDefault();

        createBrand({ name: brandName, url });
    };

    const handleChange = (event) => {
        const { value, name } = event.target;

        setFormData({ ...formData, [name]: value });
    };

    return (
        <Container className="create-brand-form pb-3">
            <Row>
                <Col>
                    <h2>Create New Brand</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="brandName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="brandName"
                                          type="text"
                                          value={brandName}
                                          onChange={handleChange}
                                          required />
                        </Form.Group>
                        <Form.Group controlId="url">
                            <Form.Label>URL</Form.Label>
                            <Form.Control name="url"
                                          type="text"
                                          value={url}
                                          onChange={handleChange}
                                          required />
                        </Form.Group>
                        <CustomButton type="submit" variant="success">Create new brand</CustomButton>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

const mapDispatchToProps = dispatch => ({
    createBrand: (formData) => dispatch(create(formData))
});

export default connect(null, mapDispatchToProps)(CreateBrandForm);
