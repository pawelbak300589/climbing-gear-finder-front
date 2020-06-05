import React, { useState } from 'react';
import { connect } from 'react-redux';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import CustomButton from "../../custom-button/custom-button.component";
import { create } from "../../../redux/brand/brand.actions";

const CreateMappingForm = ({ mappingType, createMapping }) => {
    const [formData, setFormData] = useState({
        mappingName: '',
        type: '',
    });

    const { mappingName, type } = formData;

    const handleSubmit = (event) => {
        event.preventDefault();

        createMapping({ name: mappingName, type });
    };

    const handleChange = (event) => {
        const { value, name } = event.target;

        setFormData({ ...formData, [name]: value });
    };

    return (
        <Container className="create-mapping-form mb-3">
            <Row>
                <Col>
                    <h4>Create New Mapping</h4>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="mappingName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="mappingName"
                                          type="text"
                                          value={mappingName}
                                          onChange={handleChange}
                                          required />
                        </Form.Group>
                        <Form.Group controlId="type" className="d-none">
                            <Form.Label>Type</Form.Label>
                            <Form.Control name="type"
                                          type="text"
                                          as="select"
                                          value={(mappingType !== undefined) ? mappingType : type}
                                          onChange={handleChange}
                                          disabled={(mappingType !== undefined)}
                                          required>
                                <option value="brand">Brand</option>
                                <option value="gear">Gear</option>
                                <option value="category">Category</option>
                            </Form.Control>
                        </Form.Group>
                        <CustomButton type="submit" variant="success">Create new mapping</CustomButton>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

const mapDispatchToProps = dispatch => ({
    createMapping: (formData) => dispatch(create(formData))
});

export default connect(null, mapDispatchToProps)(CreateMappingForm);
