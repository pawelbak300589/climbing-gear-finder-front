import React, { useState } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const ListMenu = ({ itemsPerPageInitial, searchInitial, onItemsPerPageChange, onSearchPhraseSubmit }) => {
    const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageInitial);
    const [searchData, setSearchData] = useState(searchInitial);

    const handleItemsPerPageChange = (event) => {
        console.log(event.target.value);
        setItemsPerPage(event.target.value);
        onItemsPerPageChange(event.target.value);
    };

    const handleSearchChange = (event) => {
        const { name } = event.target;
        const value = name === 'exact' ? !searchData.exact : event.target.value;

        setSearchData({ ...searchData, [name]: value });
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();

        onSearchPhraseSubmit(searchData);
    };

    const { phrase, exact } = searchData;

    return (
        <Container className="list-menu pb-3">
            <Row className="justify-content-between">
                <Col>
                    <Form>
                        <Form.Row className="align-items-center">
                            <Col>
                                <InputGroup size="sm">
                                    <Form.Control
                                        as="select"
                                        id="inlineFormCustomSelectPref"
                                        value={itemsPerPage}
                                        onChange={handleItemsPerPageChange}>
                                        custom>
                                        <option value="25">25 per page</option>
                                        <option value="50">50 per page</option>
                                        <option value="100">100 per page</option>
                                        <option value="500">500 per page</option>
                                        <option value="1000">1000 per page</option>
                                    </Form.Control>
                                </InputGroup>
                            </Col>
                        </Form.Row>
                    </Form>
                </Col>
                <Col>
                    <Form onSubmit={handleSearchSubmit}>
                        <Form.Row>
                            <Col>
                                <InputGroup size="sm">
                                    <FormControl
                                        type="text"
                                        placeholder={exact ? "Exact search phrase" : "Search phrase"}
                                        name="phrase"
                                        value={phrase}
                                        onChange={handleSearchChange}
                                    />
                                    <InputGroup.Append>
                                        {/*<InputGroup.Text>exact?</InputGroup.Text>*/}
                                        <InputGroup.Checkbox
                                            title="Exact search phrase"
                                            name="exact"
                                            checked={exact}
                                            onChange={handleSearchChange}
                                        ></InputGroup.Checkbox>
                                    </InputGroup.Append>
                                    <InputGroup.Append>
                                        <Button type="submit">Search</Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Col>
                        </Form.Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default ListMenu;
