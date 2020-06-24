import React from 'react';
import { connect } from "react-redux";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";

import ListItem from "../list-item/list-item.component";
import UrlItemButtons from "../item-buttons/url-item-buttons.component";

import { selectBrandUrlByBrandId } from "../../redux/brand-urls/brand-urls.selectors";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

const UrlsList = ({ brandId, brandUrls, websites }) => {
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
                                brandUrls && brandUrls.map((url) => {
                                        const itemText = () => {
                                            const currentWebsite = websites.find(website => website.id === url.website_id);
                                            if (currentWebsite) {
                                                return <>
                                                    <Badge variant="info">{currentWebsite.name}</Badge>{' '}
                                                    {url.main ? <Badge variant="warning">Main</Badge> : ''}{' '}
                                                    <Button variant="link" href={url.url} size="sm" target="_href">{url.url}</Button>
                                                </>;
                                            }
                                            return url.url;
                                        };
                                        return <ListItem key={url.id}
                                                         mainText={itemText()}
                                                         actions={itemActions(url)} />;
                                    }
                                )
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
