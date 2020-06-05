import React, { useEffect } from 'react';
import { connect } from "react-redux";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";

import BrandItemButtons from "../item-buttons/brand-item-buttons.component";
import CustomBreadcrumb from "../custom-breadcrumb/custom-breadcrumb.component";
import MappingsListContainer from "../mappings-list/mappings-list.container";
import CreateMappingForm from "../forms/create-mapping-form/create-mapping-form.component";

import { showBrandPageBreadcrumbItems } from "../custom-breadcrumb/custom-breadcrumb.data";

import { getAllByBrandId } from "../../redux/brand-mapping/brand-mapping.actions";
import { selectBrandMappingsExist } from "../../redux/brand-mapping/brand-mapping.selectors";

import './brand-details.styles.scss';

const BrandDetails = ({ brand, brandMappingsExist, getAllMappingsByBrandId }) => {
    useEffect(() => {
        if (!brandMappingsExist) {
            getAllMappingsByBrandId(brand.id);
        }
    }, [brand]);

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

                            <img src={brand.img} alt={brand.name} />

                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <hr />
                    </Col>
                </Row>
            </Container>
            <MappingsListContainer brandId={brand.id} />
            <CreateMappingForm mappingType="brand" />
        </>
    );
};

const mapStateToProps = (state, ownProps) => ({
    brandMappingsExist: selectBrandMappingsExist(ownProps.brand.id)(state),
});

const mapDispatchToProps = dispatch => ({
    getAllMappingsByBrandId: (brandId) => dispatch(getAllByBrandId(brandId))
});

export default connect(mapStateToProps, mapDispatchToProps)(BrandDetails);
