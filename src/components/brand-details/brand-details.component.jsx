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
import Break from "../break/break.component";
import CustomInlineForm from "../forms/custom-inline-form/custom-inline-form.component";

import { showBrandPageBreadcrumbItems } from "../custom-breadcrumb/custom-breadcrumb.data";
import createBrandImageFormData from "../forms/create-brand-image-form.data";
import createBrandMappingFormData from "../forms/create-brand-mapping-form.data";

import {
    create as createMappingAction,
    getAllByBrandId as getAllMappingsByBrandId
} from "../../redux/brand-mapping/brand-mapping.actions";
import {
    create as createImageAction,
    getAllByBrandId as getAllImagesByBrandId
} from "../../redux/brand-images/brand-images.actions";
import { selectBrandMappingsExist } from "../../redux/brand-mapping/brand-mapping.selectors";
import { selectBrandImageExist } from "../../redux/brand-images/brand-images.selectors";

import './brand-details.styles.scss';

const BrandDetails = ({ brand, brandMappingsExist, brandImagesExist, getAllMappings, getAllImages, createImage, createMapping }) => {
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
                        <h2>{brand.name}</h2>
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
            <Container>
                <Row>
                    <Col>
                        <CustomInlineForm data={createBrandImageFormData}
                                          onSubmit={(formData) => createImage(brand.id, formData)} />
                    </Col>
                </Row>
            </Container>
            <Break />
            <ImagesListContainer brandId={brand.id} />
            <Break />
            <Container>
                <Row>
                    <Col>
                        <CustomInlineForm data={createBrandMappingFormData}
                                          onSubmit={(formData) => createMapping(brand.id, formData)} />
                    </Col>
                </Row>
            </Container>
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
    createImage: (brandId, formData) => dispatch(createImageAction(brandId, formData)),
    createMapping: (brandId, formData) => dispatch(createMappingAction(brandId, formData))
});

export default connect(mapStateToProps, mapDispatchToProps)(BrandDetails);
