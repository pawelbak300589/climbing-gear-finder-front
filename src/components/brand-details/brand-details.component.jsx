import React from 'react';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";

import BrandItemButtons from "../item-buttons/brand-item-buttons.component";
import CustomBreadcrumb from "../custom-breadcrumb/custom-breadcrumb.component";

import { showBrandPageBreadcrumbItems } from "../custom-breadcrumb/custom-breadcrumb.data";

import './brand-details.styles.scss';

const BrandDetails = ({ brand }) => {
    return (
        <>
            <CustomBreadcrumb items={showBrandPageBreadcrumbItems} />
            <Container className="brand-details pb-3">
                <Row>
                    <Col>
                        <h2>{brand.name} <Badge variant="secondary"><a href="{brand.url}">{brand.url}</a></Badge></h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {brand.created_at}
                        {' '}
                        {brand.modified_at}
                    </Col>
                    <Col className="text-right">
                        <BrandItemButtons id={brand.id} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="item-images"> {/*TODO: create component for this */}

                            <img src="{brand.img}" alt="{brand.name}" />

                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="mapping-list"> {/*TODO: create component for this */}
                            <h4>Name Mappings:</h4>
                            <ul>
                                {
                                    brand.name_mappings.map((mapping) => {
                                        return <li key={mapping.id}>{mapping.name}</li>;
                                    })
                                }
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="mapping-create-form"> {/*TODO: create component for this */}
                            <label>Create New Mapping</label>
                            <input type="text" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default BrandDetails;
