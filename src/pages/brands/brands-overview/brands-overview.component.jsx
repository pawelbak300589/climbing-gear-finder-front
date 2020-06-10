import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import BrandsListContainer from "../../../components/brands-list/brands-list.container";
import CustomBreadcrumb from "../../../components/custom-breadcrumb/custom-breadcrumb.component";
import CustomButton from "../../../components/custom-button/custom-button.component";
import { brandsPageBreadcrumbItems } from "../../../components/custom-breadcrumb/custom-breadcrumb.data";

import { getAll } from "../../../redux/brand/brand.actions";
import { selectBrandsTotal, selectCurrentPage } from "../../../redux/brand/brand.selectors";

const BrandsOverviewPage = ({ match, brandsTotal, currentPage, getAllBrands }) => {
    useEffect(() => {
        getAllBrands();
    }, [getAllBrands]);

    return (
        <div className="brands-overview-page">
            <CustomBreadcrumb items={brandsPageBreadcrumbItems} />
            <Container className="brands-header py-3">
                <Row>
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
            </Container>
            <BrandsListContainer match={match} />
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    brandsTotal: selectBrandsTotal,
    currentPage: selectCurrentPage
});

const mapDispatchToProps = dispatch => ({
    getAllBrands: () => dispatch(getAll())
});

export default connect(mapStateToProps, mapDispatchToProps)(BrandsOverviewPage);
