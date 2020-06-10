import React from 'react';
import { connect } from "react-redux";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { default as BootstrapPagination } from "react-bootstrap/Pagination";

import { changeCurrentPage } from "../../redux/brand/brand.actions";

const Pagination = ({ pagination: { current_page, last_page }, changeCurrentPage }) => {

    const handleClick = (page) => {
        changeCurrentPage(page);
    };

    const renderPaginationBeforeItems = () => {
        let beforeItems = [];

        if (current_page !== 1) {
            beforeItems.push(
                <BootstrapPagination.First
                    key={'first'}
                    onClick={() => handleClick(1)} />
            );
            beforeItems.push(
                <BootstrapPagination.Prev
                    key={'prev'}
                    onClick={() => handleClick(current_page - 1)} />
            );
        }
        if ((current_page - 4) >= 1) {
            beforeItems.push(
                <BootstrapPagination.Ellipsis
                    key={current_page - 4}
                    onClick={() => handleClick(current_page - 4)} />
            );
        }

        return beforeItems;
    };

    const renderPaginationAfterItems = () => {
        let afterItems = [];

        if ((current_page + 4) <= last_page) {
            afterItems.push(
                <BootstrapPagination.Ellipsis
                    key={current_page + 4}
                    onClick={() => handleClick(current_page + 4)} />
            );
        }
        if (current_page !== last_page) {
            afterItems.push(
                <BootstrapPagination.Next
                    key={'next'}
                    onClick={() => handleClick(current_page + 1)} />
            );
            afterItems.push(
                <BootstrapPagination.Last
                    key={'last'}
                    onClick={() => handleClick(last_page)} />
            );
        }

        return afterItems;
    };

    const renderPaginationItems = () => {
        let paginationItems = [];

        if (current_page !== 1) {
            for (let page = (current_page - 3); page < current_page; page++) {
                (page > 0) &&
                paginationItems.push(
                    <BootstrapPagination.Item key={page} onClick={() => handleClick(page)}>
                        {page}
                    </BootstrapPagination.Item>
                );
            }
        }

        paginationItems.push(
            <BootstrapPagination.Item key={current_page} active>
                {current_page}
            </BootstrapPagination.Item>
        );

        if (current_page !== last_page) {
            for (let page = (current_page + 1); page <= (current_page + 3); page++) {
                (page <= last_page) &&
                paginationItems.push(
                    <BootstrapPagination.Item key={page} onClick={() => handleClick(page)}>
                        {page}
                    </BootstrapPagination.Item>
                );
            }
        }

        return paginationItems;
    };

    return (
        <Container className="pagination py-3 justify-content-center">
            <Row>
                <Col>
                    <BootstrapPagination size="sm">
                        {renderPaginationBeforeItems()}
                        {renderPaginationItems()}
                        {renderPaginationAfterItems()}
                    </BootstrapPagination>
                </Col>
            </Row>
        </Container>
    );
};

const mapDispatchToProps = dispatch => ({
    changeCurrentPage: (page) => dispatch(changeCurrentPage(page))
});

export default connect(null, mapDispatchToProps)(Pagination);
