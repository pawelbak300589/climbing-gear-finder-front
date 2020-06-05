import React from 'react';
import { connect } from "react-redux";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import { selectBrandMappingsByBrandId } from "../../redux/brand-mapping/brand-mapping.selectors";

const MappingsList = ({ brandMappings }) => {
    return (
        <Container>
            <Row>
                <Col>
                    <div className="mapping-list">
                        <h4>Name Mappings:</h4>
                        <ul>
                            {
                                brandMappings && brandMappings.map((mapping) =>
                                    <li key={mapping.id}>{mapping.name}</li>)
                            }
                        </ul>
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
