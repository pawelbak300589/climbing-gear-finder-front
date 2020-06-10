import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import CustomButton from "../../custom-button/custom-button.component";
import { update } from "../../../redux/brand-mapping/brand-mapping.actions";

const EditMappingForm = ({ brandId, mapping, updateMapping }) => {
    const [formData, setFormData] = useState({
        mappingName: '',
    });

    useEffect(() => {
        if (mapping) {
            setFormData({
                mappingName: mapping.name,
            });
        }
    }, [mapping]);

    const { mappingName } = formData;

    const handleSubmit = (event) => {
        event.preventDefault();

        updateMapping(brandId, mapping.id, { name: mappingName });
    };

    const handleChange = (event) => {
        const { value, name } = event.target;

        setFormData({ ...formData, [name]: value });
    };

    return (
        <Container className="create-mapping-form mb-3">
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
                        <CustomButton type="submit" variant="primary">Update mapping</CustomButton>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

const mapDispatchToProps = dispatch => ({
    updateMapping: (brandId, mappingId, formData) => dispatch(update(brandId, mappingId, formData))
});

export default connect(null, mapDispatchToProps)(EditMappingForm);
