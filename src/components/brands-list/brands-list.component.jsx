import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

import ListItem from "../list-item/list-item.component";
import BrandItemButtons from "../item-buttons/brand-item-buttons.component";

import { selectBrandsList } from "../../redux/brand/brand.selectors";

import './brands-list.styles.scss';

const BrandsList = ({ match, brands }) => {
    const itemActions = ({ id }) => (
        <BrandItemButtons id={id} />
    );

    return (
        <Container className="brands-list pb-3">
            <Row>
                <Col>
                    <ListGroup variant="flush">
                        {
                            brands.map(brand => (
                                <ListItem key={brand.id}
                                          mainText={brand.name}
                                          to={`${match.path}show/${brand.id}`}
                                          actions={itemActions(brand)} />))
                        }
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
};

const mapStateToProps = createStructuredSelector({
    brands: selectBrandsList,
});

export default connect(mapStateToProps)(BrandsList);
