import React from 'react';
import { connect } from "react-redux";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";

import ImageItemButtons from "../item-buttons/image-item-buttons.component";

import { selectBrandImageByBrandId } from "../../redux/brand-images/brand-images.selectors";
import Figure from "react-bootstrap/Figure";

import './images-list.styles.scss';

const ImagesList = ({ brandId, brandImages }) => {
    return (
        <Container className="images-list">
            <Row>
                <Col>
                    {
                        brandImages && brandImages.map((image) =>
                            <Figure className="mt-3" key={image.id}>
                                {
                                    image.main ? <Badge variant="warning">Main</Badge> : ''
                                }
                                <Figure.Image
                                    width={171}
                                    height={180}
                                    alt={image.alt}
                                    src={image.src}
                                />
                                <Figure.Caption className="text-center">
                                    {image.alt}
                                </Figure.Caption>
                                <div className="buttons-wrapper d-flex justify-content-center align-items-center">
                                    <ImageItemButtons brandId={brandId} id={image.id} main={image.main} />
                                </div>
                            </Figure>
                        )
                    }
                </Col>
            </Row>
        </Container>
    );
};

const mapStateToProps = (state, ownProps) => ({
    brandImages: selectBrandImageByBrandId(ownProps.brandId)(state),
});

export default connect(mapStateToProps)(ImagesList);
