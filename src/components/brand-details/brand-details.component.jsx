import React, { useEffect } from 'react';
import { connect } from "react-redux";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";

import BrandItemButtons from "../item-buttons/brand-item-buttons.component";
import CustomBreadcrumb from "../custom-breadcrumb/custom-breadcrumb.component";
import MappingsListContainer from "../mappings-list/mappings-list.container";
import ImagesListContainer from "../images-list/images-list.container";
import CreateMappingForm from "../forms/create-mapping-form/create-mapping-form.component";
import CreateImageForm from "../forms/create-image-form/create-image-form.component";
import Break from "../break/break.component";

import { showBrandPageBreadcrumbItems } from "../custom-breadcrumb/custom-breadcrumb.data";

import { getAllByBrandId as getAllMappingsByBrandId } from "../../redux/brand-mapping/brand-mapping.actions";
import { getAllByBrandId as getAllImagesByBrandId } from "../../redux/brand-images/brand-images.actions";
import { selectBrandMappingsExist } from "../../redux/brand-mapping/brand-mapping.selectors";
import { selectBrandImageExist } from "../../redux/brand-images/brand-images.selectors";

import './brand-details.styles.scss';

const BrandDetails = ({ brand, brandMappingsExist, brandImagesExist, getAllMappings, getAllImages }) => {
    useEffect(() => {
        if (!brandMappingsExist) {
            getAllMappings(brand.id);
        }
    }, [brand, brandMappingsExist, getAllMappings]);

    useEffect(() => {
        if (!brandImagesExist) {
            getAllImages(brand.id);
        }
    }, [brand, brandImagesExist, getAllImages]);

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
            </Container>
            <Break />
            <CreateImageForm brandId={brand.id} imageType="brand" />
            <Break />
            <ImagesListContainer brandId={brand.id} />
            <Break />
            <CreateMappingForm brandId={brand.id} mappingType="brand" />
            <Break />
            <MappingsListContainer brandId={brand.id} />
        </>
    );
};

const mapStateToProps = (state, ownProps) => ({
    brandMappingsExist: selectBrandMappingsExist(ownProps.brand.id)(state),
    brandImagesExist: selectBrandImageExist(ownProps.brand.id)(state),
});

const mapDispatchToProps = dispatch => ({
    getAllMappings: (brandId) => dispatch(getAllMappingsByBrandId(brandId)),
    getAllImages: (brandId) => dispatch(getAllImagesByBrandId(brandId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BrandDetails);
