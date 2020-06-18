import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import CustomButton from "../../custom-button/custom-button.component";

import { update } from "../../../redux/brand/brand.actions";

import './edit-brand-form.styles.scss';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const EditBrandForm = ({ brand, updateBrand }) => {
    const [formData, setFormData] = useState({
        brandName: '',
        url: '',
    });

    useEffect(() => {
        if (brand) {
            setFormData({
                brandName: brand.name,
                url: brand.url,
            });
        }
    }, [brand]);


    const { brandName, url } = formData;

    const handleSubmit = (event) => {
        event.preventDefault();

        updateBrand(brand.id, { name: brandName, url });
    };

    const handleChange = (event) => {
        const { value, name } = event.target;

        setFormData({ ...formData, [name]: value });
    };

    return (
        <Container className="edit-brand-form pb-3">
            <Row>
                <Col>
                    <h2>Edit Brand</h2>
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
                        <CustomButton type="submit" variant="primary">Update brand</CustomButton>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

const mapDispatchToProps = dispatch => ({
    updateBrand: (id, formData) => dispatch(update(id, formData))
});

export default connect(null, mapDispatchToProps)(EditBrandForm);
