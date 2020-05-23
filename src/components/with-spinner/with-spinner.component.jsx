import React from 'react';

import './with-spinner.styles.scss';

const WithSpinner = WrappedComponent => {
    const Spinner = ({ loading, ...otherProps }) => {
        return loading ? (
            <div className="spinner-overlay">
                <div className="spinner-container" />
            </div>
        ) : (
            <WrappedComponent {...otherProps} />
        );
    };
    return Spinner;
};

export default WithSpinner;
