import React from 'react';

import Pagination from "../pagination/pagination.component";

const WithPagination = WrappedComponent => ({ pagination, ...otherProps }) => {
    return pagination ? (
            <>
                <WrappedComponent {...otherProps} />
                <Pagination pagination={pagination} />
            </>
        ) :
        (
            <WrappedComponent {...otherProps} />
        );
};

export default WithPagination;
