import React, { useState } from 'react';

import CustomButton from "../../custom-button/custom-button.component";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const CustomForm = ({ data, onSubmit }) => {
    const [formData, setFormData] = useState(data.initial);

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(formData);
    };

    const handleChange = (event) => {
        const { value, name } = event.target;

        setFormData({ ...formData, [name]: value });
    };

    return (
        <Container className="pb-3">
            {
                data.form.title &&
                <Row>
                    <Col>
                        <h2>{data.form.title}</h2>
                    </Col>
                </Row>
            }
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        {
                            data.form.elements.map((element) => {
                                const { label, type, options, ...otherData } = element;
                                const renderElement = () => {
                                    if (type === 'select') {
                                        return (
                                            <Form.Control as={type} name={otherData.name} onChange={handleChange}>
                                                {
                                                    options.map((option) =>
                                                        <option key={option.value}
                                                                value={option.value}>{option.text}</option>)
                                                }
                                            </Form.Control>
                                        );
                                    } else {
                                        return <Form.Control value={formData[otherData.name]} type={type} {...otherData} onChange={handleChange} />;
                                    }
                                };

                                return <Form.Group key={otherData.name} controlId={otherData.name}>
                                    <Form.Label>{label}</Form.Label>
                                    {renderElement()}
                                </Form.Group>;
                            })
                        }
                        <CustomButton type="submit" variant={data.button.variant}>{data.button.text}</CustomButton>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default CustomForm;