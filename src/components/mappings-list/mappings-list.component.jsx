import React from 'react';
import { connect } from "react-redux";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";

import ListItem from "../list-item/list-item.component";
import MappingItemButtons from "../item-buttons/mapping-item-buttons.component";

import { selectBrandMappingsByBrandId } from "../../redux/brand-mapping/brand-mapping.selectors";

const MappingsList = ({ brandId, brandMappings }) => {
    const itemActions = ({ id }) => (
        <MappingItemButtons id={id} brandId={brandId} />
    );

    return (
        <Container>
            <Row>
                <Col>
                    <div className="mapping-list">
                        <ListGroup variant="flush">
                            {
                                brandMappings && brandMappings.map((mapping) =>
                                    <ListItem key={mapping.id}
                                              mainText={mapping.name}
                                              actions={itemActions(mapping)} />)
                            }
                        </ListGroup>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

const mapStateToProps = (state, ownProps) => ({
    brandMappings: selectBrandMappingsByBrandId(ownProps.brandId)(state),
});

export default connect(mapStateToProps)(MappingsList);
