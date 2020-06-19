import React, { useState } from 'react';
import { connect } from 'react-redux';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import CustomButton from "../../custom-button/custom-button.component";
import { create } from "../../../redux/brand-mapping/brand-mapping.actions";

const CreateMappingForm = ({ brandId, createMapping }) => {
    const [formData, setFormData] = useState({
        mappingName: '',
    });

    const { mappingName } = formData;

    const handleSubmit = (event) => {
        event.preventDefault();

        createMapping(brandId, { name: mappingName });
    };

    const handleChange = (event) => {
        const { value, name } = event.target;

        setFormData({ ...formData, [name]: value });
    };

    return (
        <Container className="create-mapping-form">
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <Form.Row className="align-items-center">
                            <Col xs="auto">
                                <Form.Label htmlFor="mappingName">
                                    <h3>Name Mappings:</h3>
                                </Form.Label>
                            </Col>
                            <Col xs="auto">
                                <Form.Control
                                    id="mappingName"
                                    className="mb-2"
                                    name="mappingName"
                                    type="text"
                                    value={mappingName}
                                    onChange={handleChange}
                                    placeholder="New mapping text"
                                    required
                                />
                            </Col>
                            <Col xs="auto">
                                <CustomButton className="mb-2" type="submit" variant="success">Create new mapping</CustomButton>
                            </Col>
                        </Form.Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

const mapDispatchToProps = dispatch => ({
    createMapping: (brandId, formData) => dispatch(create(brandId, formData))
});

export default connect(null, mapDispatchToProps)(CreateMappingForm);
