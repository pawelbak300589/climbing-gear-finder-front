import React from 'react';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";

import BrandItemButtons from "../item-buttons/brand-item-buttons.component";
import CustomBreadcrumb from "../custom-breadcrumb/custom-breadcrumb.component";
import CreateMappingForm from "../forms/create-mapping-form/create-mapping-form.component";

import { showBrandPageBreadcrumbItems } from "../custom-breadcrumb/custom-breadcrumb.data";

import './brand-details.styles.scss';

const BrandDetails = ({ brand }) => {
    return (
        <>
            <CustomBreadcrumb items={showBrandPageBreadcrumbItems} />
            <Container className="brand-details pb-3">
                <Row>
                    <Col>
                        <h2>{brand.name} <Badge variant="secondary"><a href={brand.url}>{brand.url}</a></Badge></h2>
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
                        <div className="mapping-list"> {/*TODO: create component for this + load mappings for brand from API only when there is no mapping in redux for brandID otherwise load mappings from redux store */}
                            {/*TODO: remove mappings from brands - api call - brands microservice */}
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
            </Container>
            <CreateMappingForm mappingType="brand" />
        </>
    );
};

export default BrandDetails;
