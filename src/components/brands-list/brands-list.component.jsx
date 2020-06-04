import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

import CustomButton from "../custom-button/custom-button.component";
import ListItem from "../list-item/list-item.component";
import CustomBreadcrumb from "../custom-breadcrumb/custom-breadcrumb.component";
import BrandItemButtons from "../item-buttons/brand-item-buttons.component";

import { brandsPageBreadcrumbItems } from "../custom-breadcrumb/custom-breadcrumb.data";

import { selectBrandsList, selectBrandsTotal } from "../../redux/brand/brand.selectors";

import './brands-list.styles.scss';

const BrandsList = ({ match, brands, brandsTotal }) => {
    const itemActions = ({ id }) => (
        <BrandItemButtons id={id} />
    );

    return (
        <>
            <CustomBreadcrumb items={brandsPageBreadcrumbItems} />
            <Container className="brands-list py-3">
                <Row className="list-header">
                    <Col>
                        <h2>Brands</h2>
                    </Col>
                    <Col className="text-right buttons">
                        <CustomButton type="link"
                                      variant="success"
                                      to={`${match.path}create`}>
                            Create New Brand
                        </CustomButton>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Total brands: {brandsTotal}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ListGroup variant="flush">
                            {
                                brands.map(brand => (
                                    <ListItem key={brand.id}
                                              item={brand}
                                              to={`${match.path}show/${brand.id}`}
                                              actions={itemActions(brand)} />))
                            }
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

const mapStateToProps = createStructuredSelector({
    brands: selectBrandsList,
    brandsTotal: selectBrandsTotal,
});

export default connect(mapStateToProps)(BrandsList);
