import React from 'react';

import Pagination from "../pagination/pagination.component";

const WithPagination = WrappedComponent => ({ pagination, ...otherProps }) => {
    return pagination ? (
            <>
                <Pagination pagination={pagination} />
                <WrappedComponent {...otherProps} />
            </>
        ) :
        (
            <WrappedComponent {...otherProps} />
        );
};

export default WithPagination;
