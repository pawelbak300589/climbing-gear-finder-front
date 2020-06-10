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
                            <Form.Control name="mappingName"
                                          type="text"
                                          value={mappingName}
                                          onChange={handleChange}
                                          placeholder="Mapping Text"
                                          required />
                        </Form.Group>
                        <CustomButton type="submit" variant="success">Create new mapping</CustomButton>
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
