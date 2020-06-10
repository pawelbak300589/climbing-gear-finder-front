import React, { useEffect } from 'react';
import { connect } from "react-redux";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Figure from "react-bootstrap/Figure";

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
    }, [brand, brandMappingsExist, getAllMappingsByBrandId]);

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
                            <Figure className="mx-1">
                                <Figure.Image
                                    width={171}
                                    height={180}
                                    alt={brand.name}
                                    src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22171%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20171%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17284d80e4b%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17284d80e4b%22%3E%3Crect%20width%3D%22171%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2260.8828125%22%20y%3D%2295.1%22%3E171x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                    // src={brand.img}
                                />
                                <Figure.Caption>
                                    {brand.name}
                                </Figure.Caption>
                            </Figure>
                            <Figure className="mx-1">
                                <Figure.Image
                                    width={171}
                                    height={180}
                                    alt={brand.name}
                                    src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22171%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20171%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17284d80e4b%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17284d80e4b%22%3E%3Crect%20width%3D%22171%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2260.8828125%22%20y%3D%2295.1%22%3E171x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                    // src={brand.img}
                                />
                                <Figure.Caption>
                                    {brand.name}
                                </Figure.Caption>
                            </Figure>
                            <Figure className="mx-1">
                                <Figure.Image
                                    width={171}
                                    height={180}
                                    alt={brand.name}
                                    src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22171%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20171%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17284d80e4b%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17284d80e4b%22%3E%3Crect%20width%3D%22171%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2260.8828125%22%20y%3D%2295.1%22%3E171x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                    // src={brand.img}
                                />
                                <Figure.Caption>
                                    {brand.name}
                                </Figure.Caption>
                            </Figure>
                            <Figure className="mx-1">
                                <Figure.Image
                                    width={171}
                                    height={180}
                                    alt={brand.name}
                                    src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22171%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20171%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17284d80e4b%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17284d80e4b%22%3E%3Crect%20width%3D%22171%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2260.8828125%22%20y%3D%2295.1%22%3E171x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                    // src={brand.img}
                                />
                                <Figure.Caption>
                                    {brand.name}
                                </Figure.Caption>
                            </Figure>
                            <Figure className="mx-1">
                                <Figure.Image
                                    width={171}
                                    height={180}
                                    alt={brand.name}
                                    src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22171%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20171%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17284d80e4b%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17284d80e4b%22%3E%3Crect%20width%3D%22171%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2260.8828125%22%20y%3D%2295.1%22%3E171x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                    // src={brand.img}
                                />
                                <Figure.Caption>
                                    {brand.name}
                                </Figure.Caption>
                            </Figure>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <hr />
                    </Col>
                </Row>
            </Container>
            <CreateMappingForm brandId={brand.id} mappingType="brand" />
            <MappingsListContainer brandId={brand.id} />
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
