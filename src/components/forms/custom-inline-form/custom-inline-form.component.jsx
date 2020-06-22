import React, { useState } from 'react';

import CustomButton from "../../custom-button/custom-button.component";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const CustomInlineForm = ({ data, onSubmit }) => {
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
        <Form onSubmit={handleSubmit}>
            <Form.Row className="align-items-center">
                {
                    data.form.title &&
                    <Col xs="auto">
                        <h3>{data.form.title}</h3>
                    </Col>
                }
                {
                    data.form.elements.map((element) => {
                        const { label, type, options, ...otherData } = element;
                        const renderElement = () => {
                            if (type === 'select') {
                                return (
                                    <Form.Control as={type}
                                                  id={otherData.name}
                                                  name={otherData.name}>
                                        {
                                            options.map((option) =>
                                                <option key={option.value}
                                                        value={option.value}>{option.text}</option>)
                                        }
                                    </Form.Control>
                                );
                            } else {
                                return <Form.Control id={otherData.name}
                                                     value={formData[otherData.name]}
                                                     type={type} {...otherData}
                                                     onChange={handleChange} />;
                            }
                        };

                        return <Col xs="auto" key={otherData.name}>
                            <Form.Row className="align-items-center">
                                {
                                    label &&
                                    <Col xs="auto">
                                        <Form.Label htmlFor={otherData.name}>
                                            {label}
                                        </Form.Label>
                                    </Col>
                                }
                                <Col xs="auto">
                                    {renderElement()}
                                </Col>
                            </Form.Row>
                        </Col>;
                    })
                }
                <Col xs="auto">
                    <CustomButton type="submit" variant={data.button.variant}>
                        {data.button.text}
                    </CustomButton>
                </Col>
            </Form.Row>
        </Form>
    );
};

export default CustomInlineForm;