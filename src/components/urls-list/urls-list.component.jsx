import React from 'react';
import { connect } from "react-redux";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";

import ListItem from "../list-item/list-item.component";
import UrlItemButtons from "../item-buttons/url-item-buttons.component";

import { selectBrandUrlByBrandId } from "../../redux/brand-urls/brand-urls.selectors";

const UrlsList = ({ brandId, brandUrls }) => {
    const itemActions = ({ id, main }) => (
        <UrlItemButtons brandId={brandId} id={id} main={main} />
    );

    return (
        <Container>
            <Row>
                <Col>
                    <div className="mapping-list">
                        <ListGroup variant="flush">
                            {
                                brandUrls && brandUrls.map((url) =>
                                    <ListItem key={url.id}
                                              item={{
                                                  ...url,
                                                  name: url.url
                                              }} // TODO: add website name to item.name in bracets or something
                                              actions={itemActions(url)} />)
                            }
                        </ListGroup>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

const mapStateToProps = (state, ownProps) => ({
    brandUrls: selectBrandUrlByBrandId(ownProps.brandId)(state),
});

export default connect(mapStateToProps)(UrlsList);
